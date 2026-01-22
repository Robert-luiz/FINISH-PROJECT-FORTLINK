"use client";
import React, { useState, useEffect, useCallback } from "react";
import { WHATSAPP_PHONE_NUMBER } from "../constants/constantWhatsapp";
import CustomSelect from "../customSelect/CustomSelect";

interface PreRegistrationFormProps {
  onClose: () => void;
  selectedPlan?: string;
}

interface FormData {
  fullName: string;
  dob: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  planType: string;
  howHeard: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function PreRegistrationForm({
  onClose,
  selectedPlan,
}: PreRegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    planType: selectedPlan || "",
    howHeard: "",
    dob: "",
    cep: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
  if (selectedPlan) {
    setFormData((prev) => ({
      ...prev,
      planType: selectedPlan,
    }));
  }
}, [selectedPlan]);


  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    if (!formData.fullName) newErrors.fullName = "Obrigatório";
    if (!formData.street) newErrors.street = "Obrigatório";
    if (!formData.number) newErrors.number = "Obrigatório";
    if (!formData.neighborhood) newErrors.neighborhood = "Obrigatório";
    if (!formData.city) newErrors.city = "Obrigatório";
    if (!formData.state) newErrors.state = "Obrigatório";
    if (!formData.planType) newErrors.planType = "Obrigatório";
    if (!formData.howHeard) newErrors.howHeard = "Obrigatório";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const fetchCep = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();

      if (data.erro) return;

      setFormData((prev) => ({
        ...prev,
        street: data.logradouro || "",
        neighborhood: data.bairro || "",
        city: data.localidade || "",
        state: data.uf || "",
      }));
    } catch (error) {
      console.error("Erro ao buscar CEP", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "cep") {
      const clean = value.replace(/\D/g, "");
      if (clean.length === 8) {
        fetchCep(clean);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateForm();

    if (!isFormValid) return;

    const message = `
*Novo Pré-Cadastro Fortlink*

Nome: ${formData.fullName}
Endereço: ${formData.street}, ${formData.number} ${formData.complement}
Bairro: ${formData.neighborhood}
Cidade: ${formData.city} - ${formData.state}
Plano: ${formData.planType}
Como conheceu: ${formData.howHeard}
    `;

    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`,
      "_blank",
    );
  };

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-sm text-white " +
    "bg-[#0c1024] border border-[#1b2248] " +
    "focus:outline-none focus:ring-2 focus:ring-[#05de31]/70 " +
    "focus:border-[#05de31] transition-all duration-300";

  const labelBase = "block mb-1 text-sm font-medium text-gray-300";

  const selectBase =
    inputBase +
    " appearance-none cursor-pointer " +
    "[&>option]:bg-[#0b1220] " +
    "[&>option]:text-gray-200 " +
    "[&>option:hover]:bg-[#101a35] " +
    "[&>option:checked]:bg-[#101a35]";

  const planOptions = [
    { label: "300 Mega", value: "300" },
    { label: "600 Mega", value: "600" },
    { label: "1 Giga", value: "1000" },
    { label: "1 Giga + TV", value: "1000+tv" },
  ];

  const howHeardOptions = [
    { label: "Indicação", value: "indicacao" },
    { label: "Redes sociais", value: "redes" },
    { label: "Google", value: "google" },
    { label: "Outro", value: "outro" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <h2 className="text-center text-2xl font-bold mb-6">
        Pré-Cadastro Completo
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelBase}>Nome completo</label>
            <input
              name="fullName"
              onChange={handleChange}
              className={inputBase}
            />
          </div>

          <div>
            <label className={labelBase}>CEP</label>
            <input
              name="cep"
              placeholder="00000-000"
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </div>

        <div>
          <label className={labelBase}>Rua / Avenida</label>
          <input
            name="street"
            disabled
            value={formData.street}
            className={`${inputBase} opacity-70 cursor-not-allowed`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelBase}>Cidade</label>
            <input
              value={formData.city}
              disabled
              className={`${inputBase} opacity-70 cursor-not-allowed`}
            />
          </div>

          <div>
            <label className={labelBase}>Bairro</label>
            <input
              value={formData.neighborhood}
              disabled
              className={`${inputBase} opacity-70 cursor-not-allowed`}
            />
          </div>

          <div>
            <label className={labelBase}>Número</label>
            <input
              name="number"
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </div>

        <div>
          <label className={labelBase}>Complemento</label>
          <input
            name="complement"
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <div>
          <label className={labelBase}>Plano desejado</label>
          {selectedPlan ? (
            <input
              value={
                planOptions.find((p) => p.value === formData.planType)?.label || ""
              }
              disabled
              className={`${inputBase} opacity-70 cursor-not-allowed`}
            />
          ) : (
            <CustomSelect
              value={formData.planType}
              options={planOptions}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, planType: value }))
              }
            />
          )}
        </div>

        <div>
          <label className={labelBase}>Como nos conheceu</label>
          <CustomSelect
            value={formData.howHeard}
            options={howHeardOptions}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, howHeard: value }))
            }
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full py-4 rounded-xl font-bold bg-[#05de31] text-black disabled:opacity-40"
        >
          Enviar Pré-Cadastro
        </button>
      </form>
    </div>
  );
}
