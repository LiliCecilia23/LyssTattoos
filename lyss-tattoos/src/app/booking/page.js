import {Input, RadioGroup, Radio, Textarea, CheckboxGroup, Checkbox, Button} from "@nextui-org/react";

export default function Page() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{marginTop: "-25px"}}>Book with Me</h1>

      <form style={{display: "flex", flexDirection: "row", width: "100%"}} method="POST" action="https://formsubmit.co/d84b7689bb84c8e0752640de728a9d39" encType="multipart/form-data">
        <section>
          <h2 className="mansalva" style={{fontSize: "20pt", color: "#C6444F", marginBottom: "15px", textAlign: "center"}}>About you</h2>
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Email" type="email" name="email" placeholder="Ex: me@email.com" />
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="First Name" name="first"  />
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Last Name" name="last" />
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Pronouns (If any)" name="pronouns" />
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Instagram" name="insta" placeholder="Ex: @myhandle" />
          <RadioGroup style={{marginBottom: "20px"}} label="Have you been tattooed by me before?">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
          <RadioGroup  style={{marginBottom: "20px"}} label="Is this your first tattoo?">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="How did you hear about me?" name="referal" />
        </section>
        <section id="section2">
          <h2 className="mansalva" style={{fontSize: "20pt", color: "#C6444F", marginBottom: "15px", textAlign: "center"}}>About your tattoo</h2>
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Size Estimate in inches" name="size" placeholder="Ex: 4-6 inches" />
          <Input color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Placement" name="placement" placeholder="Ex: Right arm, left thigh, etc." />
          <div id="spacer1" style={{height: "25px"}}></div>
          <Input color={"primary"} classNames={{inputWrapper: 'form', description: 'form'}} label="Upload images of the tattoo area (Please include, especially if you have existing tattoos to work around)" type="file" name="area" accept="image/png, image/jpeg" />
          <CheckboxGroup style={{marginBottom: "20px"}} label="What style are you looking to have this design in?">
            <Checkbox value="bw">Black & White</Checkbox>
            <Checkbox value="color">Color</Checkbox>
          </CheckboxGroup>
          <RadioGroup style={{marginBottom: "20px"}} label="Flash or custom?">
            <Radio value="flash">Flash</Radio>
            <Radio value="custom">Custom</Radio>
          </RadioGroup>
          <Textarea color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Description of your idea" name="description" placeholder="Type here..."></Textarea>
          <div id="spacer2" style={{height: "5px"}}></div>
          <Input color={"primary"} classNames={{inputWrapper: 'form', description: 'form'}} label="Any photo reference to help visualize your idea?" type="file" name="refs" accept="image/png, image/jpeg" />
          <Textarea color={"primary"} classNames={{inputWrapper: 'form', label: 'form', description: 'form'}} label="Any other information I should know?" name="otherInfo" placeholder="Type here..."></Textarea>
          <Button type="submit">Submit</Button>
        </section>
      </form> 
    </main>
  );
}
