// Api для ответа на запрос mock данными

export default function handler(req, res) {
  const fieldsSettings = [
    {
      name: "firstName",
      label: "First Name",
      type: "STRING",
      required: true,
      variant: "input",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "STRING",
      required: true,
      variant: "input",
    },
    {
      name: "email",
      label: "user@gmail.com",
      type: "EMAIL",
      required: true,
      variant: "input",
    },
    {
      name: "productType",
      label: "Product Type",
      type: "STRING",
      required: true,
      variant: "select",
      options: [
        { optionText: "Product $100", optionValue: "100" },
        { optionText: "Product $200", optionValue: "200" },
      ],
      settings: {
        placeholder: "Select product type",
      },
      totalize: true
    },
    {
      name: "firstOption",
      label: "Additional feature for $100",
      type: "STRING",
      variant: "checkbox",
      value: "100",
      totalize: true
    },
    {
      name: "secondOption",
      label: "Additional feature for $200",
      type: "STRING",
      variant: "checkbox",
      value: "200",
      totalize: true
    },
    {
      name: "comment",
      label: "Type your comment",
      type: "STRING",
      variant: "textarea",
    },
  ];
  res.status(200).json({ fieldsSettings });
}
