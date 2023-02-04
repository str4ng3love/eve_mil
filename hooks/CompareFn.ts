export const CompareFunc = (sorter:string, order:boolean ,a: any, b: any) => {
    let sorterA;
    let sorterB;
    if (sorter === "date") {
      sorterA = a.createdAt;
      sorterB = b.createdAt;
      if (order) {
        if (sorterA > sorterB) {
          return -1;
        }
        if (sorterA < sorterB) {
          return +1;
        }

        return 0;
      } else {
        if (sorterA > sorterB) {
          return +1;
        }
        if (sorterA < sorterB) {
          return -1;
        }

        return 0;
      }
    } else if (sorter === "author") {
      sorterA = a.authorName;
      sorterB = b.authorName;
    } else {
      sorterA = a[sorter];
      sorterB = b[sorter];
    }
    if (order) {
      if (sorterA > sorterB) {
        return +1;
      }
      if (sorterA < sorterB) {
        return -1;
      }

      return 0;
    } else {
      if (sorterA > sorterB) {
        return -1;
      }
      if (sorterA < sorterB) {
        return +1;
      }

      return 0;
    }
  };