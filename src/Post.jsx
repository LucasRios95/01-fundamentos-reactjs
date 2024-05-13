/* eslint-disable react/prop-types */
//props é um objeto contendo { author e content }

export function Post(props) {        // -> named export
    return (
        <div>
            <strong>{props.author} </strong>
            <p>{props.content}</p>
        </div>

    )

}

// export default Post -> default export

// Default Export vs Named Exports 