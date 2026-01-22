"use client";

import { Listbox } from "@headlessui/react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Selecione",
}: CustomSelectProps) {
  const selected = options.find((o) => o.value === value) || null;

  return (
    <Listbox
      value={selected}
      onChange={(opt) => {
        if (!opt) return;
        onChange(opt.value);
      }}
    >
      <div className="relative">
        <Listbox.Button className="w-full cursor-pointer rounded-xl px-4 py-3 text-sm text-white bg-[#0c1024] border border-[#1b2248] focus:outline-none focus:ring-2 focus:ring-[#05de31]/70">
          {selected ? selected.label : placeholder}
        </Listbox.Button>

        <Listbox.Options className=" absolute z-50 mt-1 w-full
        max-h-60 overflow-auto rounded-md
        bg-nexus-surface text-white shadow-lg
        ring-1 ring-black/5 focus:outline-none

        top-full
        md:top-auto md:bottom-full md:mb-2">
          {options.map((opt) => (
            <Listbox.Option key={opt.value} value={opt}>
              {({ active }) => (
                <div
                  className={`px-4 py-3 text-sm text-gray-200 cursor-pointer transition-colors ${
                    active ? "bg-[#101a35]" : "bg-[#0b1220]"
                  }`}
                >
                  {opt.label}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
