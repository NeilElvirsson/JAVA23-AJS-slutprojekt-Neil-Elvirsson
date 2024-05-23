export function TodoCard() {
    return (
        <div id="todoDiv">
            <h2>To do</h2>
            <form>
                <input type="text" placeholder="Name" />
                <button id="nameBtn">Add {">"}{">"}</button>

            </form>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eius beatae accusantium repudiandae sapiente ut nemo omnis delectus nisi! Consequatur voluptatem repellendus, laboriosam perferendis esse unde vitae ipsa hic reiciendis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus impedit eius nam aliquam totam architecto eum, corporis temporibus molestias nobis sed maiores et, iste dolores ipsam nostrum quo soluta.</p>


        </div>
    );
}

export function InProgressCard() {
    return (
        <div id="inProgressDiv">
            <h2>In Progress</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, reprehenderit consequatur. Exercitationem a molestias quia iusto ad iste eveniet suscipit veritatis doloribus excepturi, doloremque labore? Delectus laudantium earum sint doloribus!</p>


            <button id="doneBtn">Done {">"}{">"}</button>

        </div>
    );
}

export function DoneCard() {
    return (
        <div id="doneDiv">
             <h2>Done</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet voluptatibus ab beatae laudantium odit, et doloribus omnis ex obcaecati temporibus itaque necessitatibus numquam libero similique adipisci iure ratione illo?</p>


            <button id="deleteBtn">Delete {">"}{">"}</button>

        </div>
    );
}




