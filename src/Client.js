import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const Client=sanityClient({
projectId:"3duorlp0",
dataset:'production',
apiVersion:'2022-01-29',
useCdn:true,
token:"skCzeiw1fUg3wGr3JrWmJ11EZ4r2zUCGok0yfCvalgxcXOV6jOH69ftvOWaN5fVKPITjtcNiHkNJZrobUzcnEQEKC8mj0MBiwWYchygsgRrclGkPcCXpg6Mb61jao8oRh6XvR5Acu7FBWhnSNJ3TKg7NjnnuvMPaoA4jhORGTqycPZVddXrO"

});

const builder=imageUrlBuilder(Client)
export const urlFor=(source)=>builder.image(source);