import { useQuery } from "@tanstack/react-query";
import { useQueryClient, useMutation } from "@tanstack/react-query";



export const useApiGet = (key, fn, options) => useQuery({
    queryKey: key,
    queryFn: fn,
    ...options
})


export const useApiSend = (fn, success, error, invalidateKey, options) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: fn,
        onSuccess: (data) => {
            invalidateKey &&
                invalidateKey.forEach((key) => {
                    queryClient.invalidateQueries(key);
                });
            success && success(data);
        },
        onError: error,
        retry: 2,
        ...options, 
    });
};