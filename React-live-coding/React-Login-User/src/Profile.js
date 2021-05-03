import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Profile() {
    const {userData} = useContext(MyContext)
    return (
        <div>
            <h2>Welcome, {userData.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem sapiente esse minima dolores obcaecati distinctio laboriosam quos ex tenetur, libero fugiat minus nam cum fugit nobis architecto! Impedit, tenetur a? Explicabo amet repellat officia, minus commodi eveniet harum quia recusandae laudantium est repudiandae aspernatur dolores et animi dicta obcaecati iure mollitia aperiam error sit voluptate quod accusamus. Asperiores temporibus, earum natus expedita ea necessitatibus iusto distinctio? Debitis, hic ipsam libero cum ducimus maxime atque, exercitationem officiis molestias aliquam eveniet? Non dicta, officia debitis eius error illo voluptatem veritatis adipisci eos voluptate est omnis. Esse aut quis excepturi provident odit!</p>
        </div>
    )
}
