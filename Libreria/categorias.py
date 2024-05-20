import pandas as pd

# Load datasets
goodreads = pd.read_csv('goodbooks-10k/books.csv')
amazon = pd.read_csv('amazon_books/books.csv')
gutenberg = pd.read_csv('gutenberg_books/books.csv')

# Filtro por categorias
fiction_books = goodreads[goodreads['genre'] == 'Fiction']
drama_books = goodreads[goodreads['genre'] == 'Fiction']

# seleccion de columnas
selected_columns = fiction_books[['title', 'author', 'genre', 'year', 'publisher']]

# Guardar csv
selected_columns.to_csv('fiction_books.csv', index=False)
