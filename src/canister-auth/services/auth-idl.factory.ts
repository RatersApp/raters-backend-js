export const idlFactory = ({IDL}) => {
  const WhoAmI = IDL.Record({
    whoami: IDL.Text,
    authorized: IDL.Bool,
  });

  return IDL.Service({
    whoami: IDL.Func([], [WhoAmI], ['query']),
    updateControllers: IDL.Func([], [IDL.Bool], ['update']),
  });
};
