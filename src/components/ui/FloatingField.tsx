"use client";

import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldStyles =
  "peer w-full border-b border-current/25 bg-transparent pb-2.5 pt-6 text-base text-inherit placeholder-transparent outline-none transition-colors duration-300 focus:border-gold-400";

const labelStyles =
  "pointer-events-none absolute left-0 top-6 text-base text-current/50 transition-all duration-300 ease-out peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-gold-500 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

interface FloatingInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "placeholder" | "id"> {
  id: string;
  label: string;
}

export function FloatingInput({ id, label, ...props }: FloatingInputProps) {
  return (
    <div className="relative">
      <input id={id} placeholder=" " className={fieldStyles} {...props} />
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
    </div>
  );
}

interface FloatingTextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder" | "id"> {
  id: string;
  label: string;
}

export function FloatingTextarea({ id, label, ...props }: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder=" "
        className={`${fieldStyles} resize-none`}
        {...props}
      />
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
    </div>
  );
}
