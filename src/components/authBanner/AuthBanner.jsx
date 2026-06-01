import image from "../../assets/authImage.png";
function AuthBanner() {
  return (
    <div className="hidden md:flex w-1/2 bg-[#F6FAF2] items-center justify-center p-12">
      <div className="max-w-md w-full aspect-square relative flex items-center justify-center">
        <img src={image} alt="auth image" />
      </div>
    </div>
  );
}

export default AuthBanner;
