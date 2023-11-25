import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// help us create dynamic classes in tailwind -> change color based on GET
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
