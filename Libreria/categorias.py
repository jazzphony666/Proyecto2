import pandas as pd

# Load datasets
goodreads = pd.read_csv('goodbooks-10k/books.csv')
amazon = pd.read_csv('amazon_books/books.csv')
gutenberg = pd.read_csv('gutenberg_books/books.csv')

# Filter by categories (example for Fiction)
fiction_books = goodreads[goodreads['genre'] == 'Fiction']

# Select relevant columns
selected_columns = fiction_books[['title', 'author', 'genre', 'year', 'publisher']]

# Save to CSV
selected_columns.to_csv('fiction_books.csv', index=False)
