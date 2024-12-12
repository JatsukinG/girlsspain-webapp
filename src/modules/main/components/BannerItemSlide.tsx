// eslint-disable-next-line react/prop-types
const BannerItemSlide = ({banner}) => {
    return (
        <div className="w-full h-96">
            <img
                alt=""
                src={banner.image}
                className="w-full h-full object-cover brightness-100"
            />
            {banner.firstName}
        </div>
    );
};

export default BannerItemSlide;