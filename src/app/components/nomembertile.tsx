import Image from 'next/image'

interface TileProps {
    name: string;
    title: string;
    description: string;
    members: string[];
}

function NoMemberTile({ name, title, description}: TileProps) {
    // expands to fill entire width of the page
    return (
        <div className="card card-side bg-base-100 shadow-xl max-w-screen-xl">
            <figure><Image src="/IMG_0978.png" alt="{name}" width={500} height={500}/></figure>
            <div className="card-body">
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
