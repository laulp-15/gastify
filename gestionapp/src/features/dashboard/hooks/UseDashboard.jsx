import { useState } from "react"

const EMPTY_FORM = { fecha: "", categoria: "", valor: "", descripcion: "" }

export const validate = (form) => {
  const errors = {}
  if (!form.fecha) errors.fecha = "La fecha es obligatoria."
  if (!form.categoria) errors.categoria = "Selecciona una categoría."
  if (!form.valor) errors.valor = "El valor es obligatorio."
  else if (isNaN(form.valor) || Number(form.valor) <= 0) errors.valor = "Ingresa un valor mayor a 0."
  if (!form.descripcion.trim()) errors.descripcion = "La descripción es obligatoria."
  else if (form.descripcion.trim().length < 3) errors.descripcion = "Mínimo 3 caracteres."
  return errors
}

export function useDashboard() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const hoy = new Date()
  const [filtroMes, setFiltroMes] = useState(hoy.getMonth() + 1)
  const [filtroAnio, setFiltroAnio] = useState(hoy.getFullYear())

  const handleChange = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    setErrors((p) => ({ ...p, [field]: "" }))
  }

  const handleBlur = (field) => () => {
    setTouched((p) => ({ ...p, [field]: true }))
    const errs = validate({ ...form })
    setErrors((p) => ({ ...p, [field]: errs[field] || "" }))
  }

  const handleSubmit = () => {
    const errs = validate(form)
    setErrors(errs)
    setTouched({ fecha: true, categoria: true, valor: true, descripcion: true })
  }

  return {
    filtroMes, setFiltroMes,
    filtroAnio, setFiltroAnio,
    form, errors, touched,
    handleChange, handleBlur, handleSubmit,
  }
}