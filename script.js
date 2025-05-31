// 👇 在这里填入你的 Supabase 项目的 URL 和 匿名公钥
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_KEY = 'YOUR_PUBLIC_ANON_KEY';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchCards() {
  const { data, error } = await supabase
    .from('cards')
    .select('*');

  if (error) {
    console.error('Supabase 读取出错:', error);
    return;
  }

  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  data.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.content}</p>
    `;
    container.appendChild(cardElement);
  });
}

fetchCards();
