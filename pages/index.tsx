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
                animation="fade"
                closeOnBackDropClick
            >
                <div style={{ width: "200px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, corrupti ex non architecto, ipsa vitae ea
                    corporis delectus natus explicabo doloremque impedit
                    assumenda eum dolores sunt esse alias nobis nemo.
                </div>
            </Modal>
        </main>
    );
}

export default HomePage;
