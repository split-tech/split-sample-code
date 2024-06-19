export const parseTransactionAbi = (abi: string) => {
  const paramRegex = /\((.*)\)/;
  const matches = abi.match(paramRegex);
  if (matches && matches[1]) {
    const params = matches[1].split(',').map((param) => param.trim());
    const parsedParams = params.map((param) => {
      const [type, ...rest] = param.split(/\s+/).filter(Boolean);
      return rest.length === 0 ? type : rest.join(' ');
    });
    return parsedParams;
  }
  return [];
};

export const parseAddress = (input: string): string | null => {
  const ethAddressRegex = /0x[a-fA-F0-9]{40}/;
  const match = input.match(ethAddressRegex);
  return match ? match[0] : null;
};
