
const data = [
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457324/Lyss/Photo_Oct_08_2024_10_52_04_PM_1_lateuv.jpg",
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457320/Lyss/Photo_Oct_08_2024_10_52_04_PM_2_lwveuc.jpg",
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457316/Lyss/Photo_Oct_08_2024_10_52_04_PM_3_1_ilgwao.jpg",
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457311/Lyss/Photo_Oct_08_2024_10_52_04_PM_3_xn0c1z.jpg",
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457308/Lyss/Photo_Oct_08_2024_10_52_04_PM_4_zllsru.jpg",
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457303/Lyss/Photo_Oct_08_2024_10_52_04_PM_5_fuvwih.jpg",
  "https://res.cloudinary.com/dsiaveqw7/image/upload/v1728457297/Lyss/Photo_Oct_08_2024_10_52_04_PM_esq0hp.jpg"
]
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Available Flash</h1>
      <div style={{width: "80%", marginTop: "20px"}}>
        <div  className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((imageLink, index) => (
          <div key={index}>
            <img
              className="w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="flash tattoo designs in floral, fineline, illustrative style"
            />
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
