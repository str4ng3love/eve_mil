type Content = {
    id: string;
    type: string;
    value: string;
  };
export const extractContent = (obj: object) => {
    const contentArray: Content[] = [];
  
      for (const [key, value] of Object.entries(obj)) {
        contentArray.push(value);
      }
      return contentArray;
    };