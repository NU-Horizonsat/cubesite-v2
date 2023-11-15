import Image from 'next/image'

interface TileProps {
    name: string;
    title: string;
    imagesrc: string;
    description: string;
}

function NoMemberTile({ name, title, description, imagesrc}: TileProps) {
    // expands to fill entire width of the page
    return (
        <div className="card card-side text-white bg-gradient-to-t from-black to-gray-950 shadow-xl max-w-screen-md">
            <figure className="pl-4 "><Image src={imagesrc} alt="{name}" width={800} height={500}/></figure>
            <div className="card-body max-w-screen-sm">
                <h2 className="card-title">{name}</h2>
                <h3 className="card-title">{title}</h3>
                <p>{description}</p>
                <div className="card-actions">
                <p> </p>
                

                </div>
            </div>
        </div>

    );
};

export default NoMemberTile;
