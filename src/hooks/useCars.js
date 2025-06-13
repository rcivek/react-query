import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCars, addCar, deleteCar, updateCar } from '../api/carApi';

export function useCars() {
  return useQuery({ queryKey: ['cars'], queryFn: getCars });
}

export function useAddCar() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
}

export function useDeleteCar() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
}

export function useUpdateCar() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCar,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] }),
  });
} 