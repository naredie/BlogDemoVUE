<template src="./views/FormularioView.html"> </template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Formulario",
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellidos: {
        required,
        minLength: minLength(2),
      },
      descripcion: {
        required,
        minLength: minLength(10),
      },
    },
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        genero: "",
        descripcion: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        alert("Validación del formulario pasada");
      }
    },
  },
};
</script>
