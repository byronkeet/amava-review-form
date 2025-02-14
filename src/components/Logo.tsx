import naturalSelectionLogo from "/natural-selection-logo.png";
import tuludiLogo from "/tuludi-logo.jpg";

export const Logo = () => (
  <>
    <div className="fixed top-4 left-4 sm:top-8 sm:left-8">
      <img
        src={naturalSelectionLogo}
        alt="Natural Selection"
        className="h-12 sm:h-16"
      />
    </div>
    <div className="fixed top-4 right-4 sm:top-8 sm:right-8">
      <img src={tuludiLogo} alt="Tuludi" className="h-12 sm:h-16" />
    </div>
  </>
);
