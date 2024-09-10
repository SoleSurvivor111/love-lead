const useHeadTranslation = (pageData: any) => {
  return {
    t: (key: string): string => {
      const locales = pageData.locales.edges[0]?.node.data;
      let obj: any = undefined;
      if (locales) {
        obj = JSON.parse(locales);
      }

      return (obj && obj[key]) || key;
    },
  };
};

export default useHeadTranslation;
