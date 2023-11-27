import Flex from './components/Flex/Flex';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import Typography from './components/Typography/Typography';

const books = [
  {
    bookImage: '/images/image5.png',
    bookTitle: 'The Great Gatsby',
    bookDescription: 'A novel about the American Dream',
    price: 12.99,
    author: 'F. Scott Fitzgerald',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'To Kill a Mockingbird',
    bookDescription: 'A story of racial injustice and moral growth',
    price: 10.5,
    author: 'Harper Lee',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: '1984',
    bookDescription: 'A dystopian novel about surveillance and control',
    price: 9.95,
    author: 'George Orwell',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'The Catcher in the Rye',
    bookDescription: 'A story of adolescent angst and rebellion',
    price: 11.25,
    author: 'J.D. Salinger',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'Pride and Prejudice',
    bookDescription: 'A classic romance novel by Jane Austen',
    price: 8.75,
    author: 'Jane Austen',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'The Hobbit',
    bookDescription: 'A fantasy novel by J.R.R. Tolkien',
    price: 14.2,
    author: 'J.R.R. Tolkien',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'The Lord of the Rings',
    bookDescription: 'Epic high-fantasy trilogy by J.R.R. Tolkien',
    price: 25.99,
    author: 'J.R.R. Tolkien',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: "Harry Potter and the Sorcerer's Stone",
    bookDescription: 'The first book in the Harry Potter series',
    price: 9.99,
    author: 'J.K. Rowling',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'The Alchemist',
    bookDescription: 'A novel about following your dreams',
    price: 10.0,
    author: 'Paulo Coelho',
  },
  {
    bookImage: '/images/image5.png',
    bookTitle: 'The Da Vinci Code',
    bookDescription: 'A mystery thriller by Dan Brown',
    price: 11.75,
    author: 'Dan Brown',
  },
];

export default function Home() {
  return (
    <Flex gap={32} flexDirection="column" alignItems="center">
      <Typography component="h1" variant="heading">
        Inspiration
      </Typography>

      <ProductsGrid>
        {books.map((book) => (
          <ProductCard
            key={book.bookTitle}
            img={book.bookImage}
            title={book.bookTitle}
            description={book.bookDescription}
            price={book.price}
          />
        ))}
      </ProductsGrid>
    </Flex>
  );
}
