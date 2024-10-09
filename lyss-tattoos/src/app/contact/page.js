import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{marginTop: "-25px"}}>Contact Me</h1>
      <div id="contactDiv" className="greenBg" style={{height: "90%", width: "70%", margin: "auto", marginTop: "30px", padding: "50px", borderRadius: "25px"}}>
        <section style={{textAlign: "center"}}>
          <h2 className="mansalva" style={{fontSize: "20pt", color: "#8E936D", marginBottom: "15px", textAlign: "center"}}>Get in Touch</h2>
          <p>Resident Artist @ Ants Tattoo</p>
          <p>15 Tillman Ave, San Jose 95126 CA</p>
          <p>lyssakemi@gmail.com</p>
          <h2 className="mansalva" style={{fontSize: "20pt", color: "#8E936D", marginBottom: "15px", textAlign: "center", marginTop: "20px"}}>Socials</h2>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <a className="pushForward" href="https://www.instagram.com/lyss.akemi.tattoo/?ref=badge%2F&hl=en" target="_blank">          
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"><g fill="#c6444f" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(3.55556,3.55556)"><path d="M35.75,14c-20.171,0 -21.75,1.579 -21.75,21.75v0.5c0,20.171 1.579,21.75 21.75,21.75h0.5c20.171,0 21.75,-1.579 21.75,-21.75v-0.5c0,-20.171 -1.579,-21.75 -21.75,-21.75zM30,22h12c7.419,0 8,0.581 8,8v12c0,7.419 -0.581,8 -8,8h-12c-7.419,0 -8,-0.581 -8,-8v-12c0,-7.419 0.581,-8 8,-8zM45.49609,25c-0.828,0.002 -1.49809,0.67491 -1.49609,1.50391c0.002,0.828 0.67491,1.49809 1.50391,1.49609c0.828,-0.002 1.49809,-0.67491 1.49609,-1.50391c-0.002,-0.828 -0.67491,-1.49809 -1.50391,-1.49609zM35.97656,26c-5.522,0.013 -9.98956,4.50144 -9.97656,10.02344c0.013,5.522 4.50144,9.98956 10.02344,9.97656c5.522,-0.013 9.98956,-4.50144 9.97656,-10.02344c-0.013,-5.522 -4.50144,-9.98956 -10.02344,-9.97656zM35.99023,32c2.209,-0.005 4.00377,1.78123 4.00977,3.99023c0.005,2.209 -1.78123,4.00477 -3.99023,4.00977c-2.209,0.005 -4.00377,-1.78123 -4.00977,-3.99023c-0.005,-2.209 1.78123,-4.00377 3.99023,-4.00977z"></path></g></g></svg>
            </a>
            <a className="pushForward" href="https://www.tiktok.com/@lyss.akemi.tattoo" target="_blank">          
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"><g fill="#c6444f" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(3.55556,3.55556)"><path d="M42.5,14c14.375,0 15.5,1.125 15.5,15.5v13c0,14.375 -1.125,15.5 -15.5,15.5h-13c-14.375,0 -15.5,-1.125 -15.5,-15.5v-13c0,-14.375 1.125,-15.5 15.5,-15.5zM45.616,34.045v-3.79c0,0 -2.003,0.01 -3.695,-1.54c-1.422,-1.302 -1.54,-3.743 -1.54,-3.743h-3.79c0,0 0,12.934 0,14.994c0,2.06 -1.793,3.127 -3.079,3.127c-0.969,0 -3.174,-0.76 -3.174,-3.151c0,-2.51 2.535,-3.15 3.198,-3.15c0.663,0 0.924,0.142 0.924,0.142v-4c0,0 -0.616,-0.059 -1.066,-0.074c-3.825,-0.13 -6.988,3.303 -6.988,7.083c0,3.193 2.497,7.059 7.059,7.059c4.859,0 7.083,-4.052 7.083,-7.035c0,-2.179 0,-7.438 0,-7.438c0,0 1.398,0.782 2.535,1.137c1.136,0.355 2.533,0.379 2.533,0.379z"></path></g></g></svg>
            </a>
          </div>
        </section>
        <section>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6345.37093852298!2d-121.91502172455543!3d37.32627747210182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbd01c4795b7%3A0x2d1ea2a7eb8adfed!2sAnts%20Tattoo%20San%20Jose!5e0!3m2!1sen!2sus!4v1726724360672!5m2!1sen!2sus" width="300" height="225" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </main>
  );
}
