import React, { useState } from "react";
import Modal from "@base/Modal/Modal";
import Home from "containers/Home/Home";

function HomePage() {
    const [open, setOpen] = useState(false);
    return (
        <main>
            <Home />
            <button onClick={() => setOpen(true)}>Click</button>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                animation="slide-down"
                closeOnBackDropClick
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto in vero sunt eligendi, assumenda provident amet omnis
                tempora veritatis fugiat nobis. Sit aliquam ab blanditiis vitae
                hic nulla reprehenderit minus?
            </Modal>
        </main>
    );
}

export default HomePage;
