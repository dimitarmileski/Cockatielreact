import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Име"
        type="text"
        placeholder="Jane Doe"
        required
      />
      <FormField
        name="email"
        label="Емаил"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <FormField
        name="address"
        label="Адреса"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormField
        name="city"
        label="Град"
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label="Држава"
        type="text"
        placeholder="California"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
