export const idlFactory = ({IDL}) => {
  const RecordRate = IDL.Record({
    id: IDL.Principal,
    author: IDL.Principal,
    movieId: IDL.Nat32,
    userId: IDL.Nat32,
    userPrincipal: IDL.Principal,
    createdAt: IDL.Nat64,
    rate: IDL.Float32,
    comment: IDL.Text,
  });
  const RecordRateError = IDL.Variant({
    Message: IDL.Text,
  });
  const Result = IDL.Variant({
    Ok: RecordRate,
    Err: RecordRateError,
  });

  return IDL.Service({
    createRecord: IDL.Func([IDL.Nat32, IDL.Nat32, IDL.Text, IDL.Float32, IDL.Text], [Result], ['update']),
    editRecord: IDL.Func([IDL.Text, IDL.Float32, IDL.Text], [Result], ['update']),
    readRecord: IDL.Func([IDL.Text], [Result], ['query']),
    deleteRecord: IDL.Func([IDL.Text], [Result], ['update']),
  });
};
