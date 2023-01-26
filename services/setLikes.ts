export const reqSetLike = async (guideId?: string, commentId?: string) => {

  const data = {
    guideId,
    commentId,
  };
  try {
    const res = await fetch("/api/set_like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
export const reqSetDislike = async (guideId?: string, commentId?: string) => {
  const data = {
    guideId,
    commentId,
  };
  try {
    const res = await fetch("/api/set_dislike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
export const reqRemoveLike = async (guideId?:string, commentId?:string) => {
  console.log('changing')
  const data = {
    guideId, commentId
  };
  try {
    const res = await fetch("/api/remove_like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
  } catch (error) {
    console.log(error);
  }
};
