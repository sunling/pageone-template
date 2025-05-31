// 👇 在这里填入你的 Supabase 项目的 URL 和 匿名公钥
const SUPABASE_URL = 'https://pnobebtafogfdkkmfieg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBub2JlYnRhZm9nZmRra21maWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5Nzg0ODIsImV4cCI6MjA2MTU1NDQ4Mn0.TUF0BMbXYfqKb9f2_pSecbNNazBs-QEbFZiJCA1g0Ys';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchCards() {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .limit(10)
    .not('Title', 'is', null)
    .not('Quote', 'is', null)
    .order('Created', { ascending: false });  // 按 Created 倒序

  if (error) {
    console.error('读取出错:', error);
    return;
  }

  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  data.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <h3>${card.Title}</h3>
      <p>${card.Quote}</p>
    `;
    container.appendChild(cardElement);
  });
}

fetchCards();