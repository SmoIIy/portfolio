import Image from "next/image";
import styles from "../ImageGallery.module.css";

//Assuming you have CSS modules set up

export default function ImageGallery({ images }) {
    return (
        <div className={styles.gallery}>
            {images.map((img) => (
                <div key={img.id} className="hover:scale-105 transition-all">
                    <Image
                        src={img}
                        alt="2"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </div>
            ))}
        </div>
    );
}
