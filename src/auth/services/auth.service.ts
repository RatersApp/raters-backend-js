import {Injectable} from '@nestjs/common';
import {AuthRequestDto} from '../dtos/auth-request.dto';
import {AuthResponseDto} from '../dtos/auth-response.dto';

@Injectable()
export class AuthService {
  constructor() {}

  public async auth(data: AuthRequestDto): Promise<AuthResponseDto> {
    try {
      const publicKeyBuffer = new Uint8Array(Buffer.from(data.publicKey, 'hex'));
      const signatureBuffer = new Uint8Array(Buffer.from(data.signature, 'hex'));
      const messageBuffer = new TextEncoder().encode(data.message);

      const publicKey = await crypto.subtle.importKey(
        'spki',
        publicKeyBuffer,
        {
          name: 'ECDSA',
          namedCurve: 'P-256',
        },
        true,
        ['verify']
      );

      const isValid = await crypto.subtle.verify(
        {
          name: 'ECDSA',
          hash: {name: 'SHA-256'},
        },
        publicKey,
        signatureBuffer,
        messageBuffer
      );

      return {result: isValid};
    } catch (error) {
      return {result: false, error: error.message};
    }
  }
}
