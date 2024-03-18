import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = 'https://fhoosuspbzmfwyfxabif.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZob29zdXNwYnptZnd5ZnhhYmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTkzNjksImV4cCI6MjAyNjM3NTM2OX0.xb-eoMwqUlcb5Ufw3dj-8qMU6hoPK6R9gT_myMh9tCM'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    for (let book of books) {
        let bookList = document.getElementById(
            'books');
        bookList.innerHTML +=
            `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    </tr>`;
    }
}

getBooks();