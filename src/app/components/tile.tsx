import Image from 'next/image'

interface TileProps {
    name: string;
    title: string;
    description: string;
    members: string[];
}

function Tile({ name, title, description, members }: TileProps) {
    // expands to fill entire width of the page
    return (
        <div className="card card-side text-white bg-gradient-to-t from-black to-gray-950 shadow-xl max-w-screen-md">
            <figure><Image src="/IMG_0978.png" alt="{name}" width={500} height={500}/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="card-title">{title}</h3>
                <p>{description}</p>
                <div className="card-actions">
                <p> </p>
                <p>Members:</p>

                    {members.map((member,index) => (
                        <div key={index} className="badge badge-outline badge-accent">{member}</div>
                    ))}

                </div>
            </div>
        </div>

    );
};

export default Tile;
