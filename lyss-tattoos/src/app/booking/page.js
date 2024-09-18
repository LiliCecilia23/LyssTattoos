import {Input, RadioGroup, Radio} from "@nextui-org/react";

export default function Page() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24" style={{display: "flex", flexDirection: "column"}}>
      <form method="POST" action="https://formsubmit.co/d84b7689bb84c8e0752640de728a9d39" encType="multipart/form-data">
          <h3>About you</h3>
          <Input label="Email" type="email" name="email" placeholder="Your email" />
          <Input label="First Name" name="first"  />
          <Input label="Last Name" name="last" />
          <Input label="Pronouns (If any)" name="pronouns" />
          <Input label="Instagram" name="insta" />
          <RadioGroup label="Have you been tattooed by me before?">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
          <h3>About your tattoo</h3>
          <Input label="Size Estimate in inches" name="size" placeholder="Ex: 4-6 inches" />
          <Input label="Placement" name="placement" placeholder="Ex: Right arm, left thigh, etc." />
          <Input label="Upload images of the tattoo area" type="file" name="area" accept="image/png, image/jpeg" />
          <p>Please include, especially if you have existing tattoos to work around</p>
          <RadioGroup label="What style are you looking to have this design in?">
            <Radio value="bw">Black & White</Radio>
            <Radio value="accent">Black & white with color accents</Radio>
            <Radio value="color">Full Color</Radio>
            <Radio value="other">Other</Radio>
          </RadioGroup>
          <RadioGroup label="Flash or custom?">
            <Radio value="flash">Flash</Radio>
            <Radio value="custom">Custom</Radio>
          </RadioGroup>
          <textarea label="Description of your idea" name="description" placeholder="Type here..."></textarea>
          <Input label="Any photo reference to help visualize your idea?" type="file" name="refs" accept="image/png, image/jpeg" />
          <RadioGroup label="Is this your first tattoo?">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
          <textarea label="Any other information I should know?" name="otherInfo" placeholder="Type here..."></textarea>
          <button type="submit">Submit</button>
      </form> 
    </main>
  );
}
