export default function (plop) {
  plop.setGenerator("component", {
    description: "Crea un componente React con JSX y CSS",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nombre del componente:",
        validate: (value) => {
          if (!value || !value.trim()) {
            return "El nombre es obligatorio";
          }

          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        template:
          "import './{{pascalCase name}}.css';\n\nexport function {{pascalCase name}}() {\n  return <div>{{pascalCase name}}</div>;\n}\n",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.css",
      },
    ],
  });
}
