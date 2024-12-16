//@ts-nocheck
//TODO fix ts errors

const GraphQLErrorsRenderer = ({errors}) => {
    return (
        <div>
            {
                errors &&
                errors.map((error, index) => (
                    <div
                        className="text-error"
                        key={index}>
                        {error.message}
                    </div>
                ))
            }
        </div>
    )
}

export default GraphQLErrorsRenderer