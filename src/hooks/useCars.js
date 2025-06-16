import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCars, addCar, deleteCar, updateCar } from '../api/carApi';

export function useCars() {
  return useQuery({ queryKey: ['cars'], queryFn: getCars });
}

export function useAddCar() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
  return { addCar: mutation.mutate, isLoading: mutation.isLoading, error: mutation.error };
}

export function useDeleteCar() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
  return { removeCar: mutation.mutate, isLoading: mutation.isLoading, error: mutation.error };
}

export function useUpdateCar() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
  return { updateCar: mutation.mutate, isLoading: mutation.isLoading, error: mutation.error };
} 