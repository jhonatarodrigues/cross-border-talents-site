const Mobile = (children: string) => `

    @media only screen and (max-width: 750px) {
        ${children}
    }
`;

export { Mobile };
