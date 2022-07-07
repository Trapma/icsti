import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      console.log("test loading", isLoading);
      await callback();
    } catch (e) {
      console.log("test e", e);
      setError(e.message);
    } finally {
      setIsLoading(false);
      console.log("test loading", isLoading);
    }
  };

  return [fetching, isLoading, error];
};
