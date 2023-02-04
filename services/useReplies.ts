import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { Comment, Like } from "@prisma/client";
interface CommentData extends Comment {
  children: {
    id: string;
    createdAt: string;
    message: string;
    parentId: string | null;
    updatedAt: string | null;
    userId: string;
    author: string;
    guideId: string | null;
    _count:{
        like:number;
        dislikes:number;
        children:number
    },
    like: Like[],
    dislikes: Like[]

  }[];
}
export function useReplies(id: string) {
  const { data, error, isLoading } = useSWR<CommentData, Error>(
    `/api/reply/${id}`,
    fetcher
  );

  return {
    replies: data,
    isLoading,
    isError: error,
  };
}
