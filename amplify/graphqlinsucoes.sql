type newcodbinsucoes @model
    @auth(rules: [
        { allow: owner, operations: [create, delete, update] },
    ]) {
    pk: String!
    sk: String!
    qiD: ID
    duration: Int
    smoker: String
    gender: String
    quote: Int
    age: Int
}
 


