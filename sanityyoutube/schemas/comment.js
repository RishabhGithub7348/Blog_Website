export default {
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
        {
            name: "name",
            title: 'Name',
            type: "string",
        },
        {
            title: "Approved",
            name: "approved",
            type: "boolean",
            description: "Comments won't show up unless approved",
        },
        {
            name: "email",
            title: 'Email',
            type: "string",
        },
        {
            name: "comment",
            title: 'Comment',
            type: "text",
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: { type: 'post' },
          },
    ],
    
};