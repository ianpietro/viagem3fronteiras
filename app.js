/* ==========================================================================
   Travel Itinerary - Premium Interactivities (JavaScript)
   ========================================================================== */

// 1. Default Foz do Iguaçu Itinerary Data
const defaultItinerary = [
  {
    dayNum: 1,
    dayTitle: "O Pouso Descompassado e a Chegada",
    date: "Terça-feira, 30 de Junho",
    hotel: "Village San Francisco",
    restaurant: "Bona Trattoria ou Quinta da Oliva",
    transport: "Carro Alugado (Retirada às 19:30 no aeroporto)",
    weatherIcon: "fa-sun",
    weatherTemp: "24° / 14°C",
    activities: [
      { time: "15:30", title: "Pouso da Sophie em Foz", desc: "Pouso da Sophie em Foz (IGU) vinda do Rio (GIG). Ela pega um Uber direto para o Village San Francisco para fazer o check-in e receber as chaves com o anfitrião Sergio." },
      { time: "18:55", title: "Pouso de Ian, Andresa e Isa", desc: "Pouso do voo vindo de Belém (conexão em GRU)." },
      { time: "19:30", title: "Retirada do Carro Alugado", desc: "Retirada do carro alugado no terminal do aeroporto, acomodação das malas no porta-malas e deslocamento até a região norte da cidade." },
      { time: "20:15", title: "Reunião do Grupo Completo", desc: "Chegada ao condomínio Village San Francisco e reunião de todo o grupo." },
      { time: "Noite", title: "Jantar de Boas-Vindas", desc: "Jantar na Bona Trattoria ou na Quinta da Oliva (via Av. República Argentina), a menos de 10 minutos de carro da hospedagem." }
    ]
  },
  {
    dayNum: 2,
    dayTitle: "Itaipu, Circuitos Culturais e Pôr do Sol no Marco",
    date: "Quarta-feira, 01 de Julho",
    hotel: "Village San Francisco",
    restaurant: "Restaurante Barracão & Cabeza de Vaca",
    transport: "Carro Alugado (Dia Inteiro)",
    weatherIcon: "fa-cloud-sun",
    weatherTemp: "24° / 13°C",
    activities: [
      { time: "09:15", title: "Saída do Condomínio", desc: "Saída de carro em direção à Usina de Itaipu." },
      { time: "09:30", title: "Itaipu Panorâmica (Tour Normal)", desc: "Deixar o carro no estacionamento oficial do Centro de Visitantes. Visita panorâmica da grandiosa usina, excelente para todas as idades, com paradas nos mirantes para fotos incríveis da barragem (09:30 às 11:30)." },
      { time: "12:15", title: "Almoço no Restaurante Barracão", desc: "Almoço delicioso de comida caseira (buffet no fogão a lenha), localizado na descida da usina." },
      { time: "14:00", title: "Templo Budista Chen Tien", desc: "Visita contemplativa ao Templo Budista na região norte (14:00 às 15:15)." },
      { time: "15:40", title: "Mesquita Omar Ibn Al-Khattab", desc: "Parada na Mesquita na região central (15:40 às 16:30). Ombros e pernas cobertos; lenço fornecido para as mulheres na entrada." },
      { time: "17:00", title: "Pôr do Sol no Marco das Três Fronteiras", desc: "Chegada ao Marco (Lado BR). Momento para pegar lugar para o pôr do sol de inverno no encontro dos rios Iguaçu e Paraná." },
      { time: "19:30", title: "Show Cultural & Jantar", desc: "Apresentação ao vivo de danças típicas ao ar livre. Jantar no restaurante Cabeza de Vaca (dentro do complexo) ou retorno para o centro." }
    ]
  },
  {
    dayNum: 3,
    dayTitle: "Cataratas, Almoço no Parque, Aves e Devolução do Carro",
    date: "Quinta-feira, 02 de Julho",
    hotel: "Village San Francisco",
    restaurant: "Bistrô da Mata (Parque das Aves)",
    transport: "Carro Alugado (Devolução às 19:00) + Uber/Táxi",
    weatherIcon: "fa-cloud-showers-heavy",
    weatherTemp: "23° / 10°C",
    activities: [
      { time: "08:15", title: "Saída do Condomínio", desc: "Saída de carro cruzando a cidade em direção ao extremo sul. As malas ficam guardadas no Village San Francisco." },
      { time: "08:45", title: "Cataratas Brasileiras", desc: "Parque Nacional do Iguaçu. Carro no estacionamento oficial. Trilha panorâmica e passarela da Garganta do Diabo (08:45 às 11:45)." },
      { time: "11:45", title: "Travessia para o Parque das Aves", desc: "Deslocamento a pé (3 minutos) cruzando a rua até o Parque das Aves." },
      { time: "12:00", title: "Almoço no Bistrô da Mata", desc: "Almoço no restaurante localizado logo na entrada do Parque das Aves (12:00 às 13:00)." },
      { time: "13:00", title: "Circuito do Parque das Aves", desc: "Visita imersiva ao circuito de viveiros gigantes do Parque das Aves (13:00 às 15:30)." },
      { time: "15:30", title: "Retorno e Descanso", desc: "Retorno de carro ao Village San Francisco para banho, descanso e troca de roupa para o frio da noite (15:30 às 18:00)." },
      { time: "18:30", title: "Saída rumo ao Aeroporto", desc: "Deslocamento para a devolução do veículo." },
      { time: "19:00", title: "Devolução do Carro Alugado", desc: "Devolução do carro alugado diretamente no balcão do terminal do aeroporto." },
      { time: "19:30", title: "Retorno de Uber / Táxi", desc: "Retorno do grupo para o condomínio Village San Francisco." }
    ]
  },
  {
    dayNum: 4,
    dayTitle: "Paraguai Dia 1 (Compras Livres)",
    date: "Sexta-feira, 03 de Julho",
    hotel: "Village San Francisco",
    restaurant: "Opção a escolher (Ciudad del Este) & Bella Italia (Noite)",
    transport: "A pé / Ônibus Local / Táxi (decidido na hora conforme o trânsito)",
    weatherIcon: "fa-cloud-sun",
    weatherTemp: "19° / 8°C",
    activities: [
      { time: "06:00", title: "Saída Rumo ao Paraguai", desc: "Saída do Village San Francisco rumo a Ciudad del Este. Deslocamento bem cedo em direção à Ponte da Amizade para cruzar antes de formar qualquer trânsito." },
      { time: "07:00", title: "Compras Livres pelas Grandes Lojas", desc: "Primeiro round de compras totalmente livre pelas grandes lojas âncoras (Cellshop, Shopping China, Monalisa, Shopping Terra Nova) à medida que abrem suas portas. Sem pressa e focado no que der vontade! (07:00 às 12:30)" },
      { time: "12:30", title: "Pausa para o Almoço (Escolhas Reais)", desc: "Pausa para refeição (12:30 às 14:00). Escolham na hora de acordo com o ritmo das compras:<br><br>• <strong>SAX Palace</strong>: Sofisticado, ar-condicionado forte, pratos premium e vista panorâmica incrível para a ponte e o Rio Paraná.<br>• <strong>Restaurante Shopping China (3º piso Shopping Paris)</strong>: Praça de alimentação gigante de alto padrão, ideal para comer bem sem sair do prédio.<br>• <strong>Baviera</strong>: Carnes grelhadas e culinária alemã tradicional, porções fartas e ambiente seguro.<br>• <strong>Café Monalisa</strong>: Executivos leves, cafés e salgados gourmet rápidos dentro da própria loja.<br>• <strong>Shopping Del Este</strong>: Ao lado da aduana paraguaia, conveniência pura com grelhados rápidos." },
      { time: "14:00", title: "Repescagem e Retorno", desc: "Breve repescagem de lojas e retorno a Foz (a pé cruzando a ponte ou pegando um táxi local, dependendo do trânsito na aduana). Parada obrigatória na hospedagem para guardar sacolas com segurança." },
      { time: "Noite", title: "Noite Italiana no Hotel Bella Italia", desc: "Jantar especial na famosa Noite Italiana (famoso rodízio de queijos gigantesco e massas artesanais)." }
    ]
  },
  {
    dayNum: 5,
    dayTitle: "Paraguai Dia 2 (Compras Livres) & Noite de Barzinhos",
    date: "Sábado, 04 de Julho",
    hotel: "Village San Francisco",
    restaurant: "Opções no Paraguai & Bares da Av. Jorge Schimmelpfeng (Noite)",
    transport: "A pé / Ônibus Local / Táxi (a decidir na hora)",
    weatherIcon: "fa-sun",
    weatherTemp: "19° / 8°C",
    activities: [
      { time: "07:30", title: "Saída Cedo do Condomínio", desc: "Saída em direção à ponte (a pé ou de ônibus). Como o comércio no Paraguai fecha mais cedo aos sábados (por volta das 15:00), manter a saída cedo é fundamental." },
      { time: "08:00", title: "Segundo Bloco de Compras Livres", desc: "Tempo precioso para pesquisar preços pendentes, voltar às lojas preferidas ou garantir itens que faltaram no dia anterior (08:00 às 13:00)." },
      { time: "13:00", title: "Pausa para o Almoço", desc: "Almoço livre (13:00 às 14:15). Recomenda-se focar na Praça do Shopping China (se ainda estiverem no Shopping Paris) ou na do Shopping Del Este (se já estiverem finalizando perto da saída da aduana)." },
      { time: "14:30", title: "Retorno Definitivo ao Brasil", desc: "Retorno definitivo ao Brasil (a pé ou de táxi) para escapar do gargalo de trânsito da ponte no fechamento massivo do comércio." },
      { time: "Noite", title: "Bares na Jorge Schimmelpfeng", desc: "Jantar e drinks nos bares animados e centrais da principal avenida gastronômica de Foz (como o Capitão Bar ou Rafain Chopp)." }
    ]
  },
  {
    dayNum: 6,
    dayTitle: "A Travessia e a Vibe da Feirinha",
    date: "Domingo, 05 de Julho",
    hotel: "Hospedaje Jose Gorgues",
    restaurant: "La Feirinha (Puerto Iguazú)",
    transport: "Táxi Argentino Oficial + a pé",
    weatherIcon: "fa-sun",
    weatherTemp: "19° / 9°C",
    activities: [
      { time: "11:30", title: "Check-out no Brasil", desc: "Check-out no Village San Francisco em Foz. Um táxi argentino oficial (veículo branco com listra verde) busca o grupo completo com as malas na porta do condomínio." },
      { time: "12:00", title: "Parada no Duty Free Shop", desc: "Parada estratégica no Duty Free Shop Puerto Iguazú no caminho para a fronteira (12:00 às 13:15). Excelente para conferir chocolates, bebidas e importados com calma." },
      { time: "13:30", title: "Imigração & Entrada na Argentina", desc: "Trâmite de imigração na aduana argentina (Gendarmeria) facilitado pelo táxi e deslocamento até o centro de Puerto Iguazú." },
      { time: "14:00", title: "Check-in no Jose Gorgues", desc: "Check-in e acomodação no Quarto Quádruplo Superior do Hospedaje Jose Gorgues (Fray Luis Beltrán, 169). Região central excelente, fazemos tudo a pé ou de táxi local." },
      { time: "Noite", title: "A Vibe da Feirinha de Puerto Iguazú", desc: "Mesas ao ar livre para curtir a vibe descontraída do domingo à noite. Peçam as famosas empanadas fritas na hora, tábuas de frios com salame curtido no azeite e azeitonas recheadas gigantes!<br><br>⚠️ <strong>Nota de Câmbio:</strong> Muitas barracas da feirinha não aceitam cartão ou cobram taxas extras. Paguem em <strong>Real (BRL) ou Dólar (USD)</strong> em espécie, ou usem o cartão Wise se a barraca aceitar sem taxas adicionais." }
    ]
  },
  {
    dayNum: 7,
    dayTitle: "Cataratas Argentinas e Garganta del Diablo",
    date: "Segunda-feira, 06 de Julho",
    hotel: "Hospedaje Jose Gorgues",
    restaurant: "El Quincho del Tío Querido ou Restaurante Aqva (Noite)",
    transport: "Ônibus Urbano (Rio Uruguay) ou Táxi Local",
    weatherIcon: "fa-cloud-sun",
    weatherTemp: "21° / 11°C",
    activities: [
      { time: "08:15", title: "Deslocamento ao Parque Nacional", desc: "Ida até o terminal de ônibus urbano (ao lado da hospedagem) para pegar a linha Rio Uruguay direta para o parque de forma muito barata, ou simplesmente rachem um táxi na avenida." },
      { time: "08:45", title: "Parque Nacional Iguazú (Lado Argentino)", desc: "Caminhada física intensa pelos Circuitos Superior e Inferior por dentro da selva missioneira. O ponto alto é o trem ecológico até a Garganta do Diabo para ver a força avassalador das quedas de cima (08:45 às 15:30)." },
      { time: "16:00", title: "Retorno & Descanso", desc: "Retorno para o hotel para banho e descanso antes do jantar." },
      { time: "Noite", title: "Jantar Especial de Parrillas", desc: "Escolha entre o <strong>El Quincho del Tío Querido</strong> (famoso pelo corte de Ojo de Bife e apresentações de tango ao vivo - exige reserva antecipada) ou o <strong>Restaurante Aqva</strong> (excelentes cortes de Bife de Chorizo e pratos com peixes locais como o Surubí).<br><br>⚠️ <strong>Nota de Câmbio:</strong> Aceitam Real (BRL), Dólar (USD) e cartões internacionais convencionais (como Wise e Nomad)." }
    ]
  },
  {
    dayNum: 8,
    dayTitle: "Hito Tres Fronteras, La Aripuca e Vinotecas",
    date: "Terça-feira, 07 de Julho",
    hotel: "Hospedaje Jose Gorgues",
    restaurant: "Zona Gastronômica Central",
    transport: "Caminhada leve & Táxi Local",
    weatherIcon: "fa-cloud-showers-heavy",
    weatherTemp: "19° / 10°C",
    activities: [
      { time: "09:30", title: "Caminhada ao Hito Tres Fronteras", desc: "Caminhada a partir do hotel até o Marco Argentino. Conta com uma praça charmosa com vista para o encontro dos rios e uma feira de artesanato excelente para lembrancinhas." },
      { time: "11:30", title: "Complexo Eco-Cultural La Aripuca", desc: "Táxi local até a estrutura monumental construída com troncos gigantes resgatados da floresta. Experimentem o sorvete artesanal de erva-mate ou de pétalas de flor!" },
      { time: "14:30", title: "Tarde de Vinotecas & Alfajores", desc: "Caça a vinhos e alfajores no centro de Puerto Iguazú. Visitem vinotecas tradicionais próximas (Caminos del Vino ou Tierra de Vinos) para consultoria de rótulos argentinos. Garantam as caixas de alfajor artesanal da marca Cachafaz (o de maizena é imbatível) para levar na mala." },
      { time: "Noite", title: "Jantar de Despedida", desc: "Último jantar de despedida do grupo completo circulando pela fantástica zona gastronômica central de Puerto Iguazú." }
    ]
  },
  {
    dayNum: 9,
    dayTitle: "A Despedida e o Retorno (Frentes Separadas)",
    date: "Quarta-feira, 08 de Julho",
    hotel: "Check-out (Retorno)",
    restaurant: "Medialunas no Centro & Aeroporto",
    transport: "Táxi Argentino Pré-contratado + Voo",
    weatherIcon: "fa-cloud-showers-heavy",
    weatherTemp: "19° / 15°C",
    activities: [
      { time: "08:30", title: "Último Café da Manhã", desc: "Aproveitem para comer medialunas folhadas quentinhas com doce de leite no centro da cidade antes de fechar as malas (08:30 às 09:30)." },
      { time: "10:00", title: "Check-out no Jose Gorgues", desc: "Check-out obrigatório. Malas fechadas e prontas com todas as compras, vinhos e alfajores organizados." },
      { time: "10:15", title: "Último Passeio Rápido", desc: "Manhã livre em Puerto Iguazú. Como as malas estão guardadas na recepção, vale caminhar pelo centro para arrematar alguma lembrança ou relaxar (10:15 às 12:45)." },
      { time: "13:00", title: "Saída Rígida da Argentina", desc: "⚠️ <strong>Regra de Ouro:</strong> O táxi argentino oficial busca o grupo com as malas na porta da hospedagem. Sair da Argentina pontualmente às 13:00 é obrigatório. Julho é alta temporada, e a fila da aduana de saída de Puerto Iguazú pode reter o trânsito por mais de uma hora. Garantia de estresse zero para os voos!" },
      { time: "14:15", title: "Chegada ao Aeroporto (IGU)", desc: "Chegada do táxi ao terminal do Aeroporto de Foz do Iguaçu (IGU)." },
      { time: "✈️", title: "FRENTE 1: ANDRESA E ISA (Destino: Belém)", desc: "• <strong>14:15 às 15:30</strong>: Despacho de bagagens e check-in no balcão da LATAM com exatas 3 horas de antecedência.<br>• <strong>16:30</strong>: Embarque no portão.<br>• <strong>17:15</strong>: Decolagem do voo LA 3461 rumo a Brasília (conexão de 1h45) e pouso final em Belém às 23:35." },
      { time: "✈️", title: "FRENTE 2: IAN E SOPHIE (Destino: Rio)", desc: "Como vocês já estarão no aeroporto desde as 14:15 para acompanhar as meninas, aproveitem o tempo pós-embarque delas com calma.<br><br>• <strong>17:15</strong>: Enquanto o voo delas decola, abre a janela de check-in para o voo de vocês. Sigam até o balcão da GOL para despachar as malas.<br>• <strong>18:00 às 19:30</strong>: Tempo livre para jantar na praça de alimentação de Foz, carregar celulares e revisar fotos.<br>• <strong>19:40</strong>: Embarque no portão.<br>• <strong>20:15</strong>: Decolagem do voo direto G3 1867 com destino ao Rio de Janeiro (GIG).<br>• <strong>22:15</strong>: Pouso final no Aeroporto do Galeão." }
    ]
  }
];

// App State
let itineraryData = [];
let targetDate = new Date("2026-06-30T15:30:00").getTime();
let activeFilter = 'all';

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadItineraryData();
  setupCountdown();
  renderTimeline();
  setupChecklist();
  setupLightbox();
  updateLiveDashboardWeather();
  setupBottomNav();
  setupScrollSpy();
  loadExpenses();
  recalculateSplitter();
  initCloudSync();

  // Register PWA Service Worker for absolute offline support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('[PWA] Service Worker registrado com sucesso:', reg.scope);
        
        // Listen for new service worker activations to force a reload and apply changes instantly
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                console.log('[PWA] Nova versão detectada! Recarregando página...');
                window.location.reload();
              }
            });
          }
        });
      })
      .catch((err) => console.error('[PWA] Falha ao registrar Service Worker:', err));
  }
});

// 2. LocalStorage & Data Loading
function loadItineraryData() {
  itineraryData = [...defaultItinerary];
}

// 3. Render Timeline
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  const nav = document.getElementById("timelineNav");
  
  // Clear lists
  container.innerHTML = "";
  
  // Render Nav Buttons (Keep "Todos os Dias" and add days dynamically)
  nav.innerHTML = `<button class="timeline-btn ${activeFilter === 'all' ? 'active' : ''}" onclick="filterTimeline('all')">Todos os Dias</button>`;
  
  itineraryData.forEach(day => {
    // Add Nav Button
    nav.innerHTML += `<button class="timeline-btn ${activeFilter == day.dayNum ? 'active' : ''}" onclick="filterTimeline(${day.dayNum})">Dia ${day.dayNum}</button>`;
    
    // Check if we should render this card based on filter
    if (activeFilter !== 'all' && activeFilter != day.dayNum) return;
    
    // Create Timeline Card
    const card = document.createElement("div");
    card.className = "timeline-item";
    
    let activitiesHtml = "";
    day.activities.forEach(act => {
      activitiesHtml += `
        <div class="activity-block">
          <div class="activity-time">${act.time}</div>
          <div class="activity-details">
            <h4>${act.title}</h4>
            <p>${act.desc}</p>
          </div>
        </div>
      `;
    });
    
    card.innerHTML = `
      <div class="timeline-bullet"></div>
      <div class="glass-panel timeline-card" onclick="toggleCard(this)">
        <div class="timeline-header">
          <span class="timeline-day">DIA ${day.dayNum} - ${day.dayTitle}</span>
          <div class="timeline-meta">
            <span class="timeline-date">${day.date}</span>
            <div class="weather-widget">
              <div class="weather-widget-icon">
                <i class="fa-solid ${day.weatherIcon}"></i>
              </div>
              <div class="weather-widget-temps">
                <span class="temp-max">${day.weatherTemp.split('/')[0].trim()}</span>
                <span class="temp-min">${day.weatherTemp.split('/')[1].trim()}</span>
              </div>
            </div>
          </div>
        </div>
        <h3><i class="fa-solid fa-compass" style="color: var(--secondary); margin-right: 8px;"></i> Explorações Principais</h3>
        
        <div class="timeline-expandable">
          ${activitiesHtml}
          
          <div class="timeline-footer-details">
            <div class="footer-detail-item">
              <i class="fa-solid fa-bed footer-detail-icon"></i>
              <div class="footer-detail-text">
                <h5>HOSPEDAGEM</h5>
                <p>${day.hotel === 'Village San Francisco' ? 
                  `<a href="https://www.airbnb.com/l/AaVd8Dlr?s=67&unique_share_id=c0554429-ea38-4195-ba44-79a45ed9f2df" target="_blank" onclick="event.stopPropagation()" class="hotel-link">${day.hotel}</a>` : 
                  (day.hotel === 'Hospedaje Jose Gorgues' ? 
                    `<a href="https://secure.booking.com/confirmation.pt-br.html?label=gen173nr-10CAEoggI46AdIM1gEaCCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4Aoi-ztAGwAIB0gIkNmNjMDY5NzktZWI5Zi00OGZjLThjMzAtNDRlNzcxNmQ5NzA22AIB4AIB&sid=2a6ce8a6b3d74b342a35d4c1ac426db9&aid=304142&auth_key=N01qLUfwTxGIOh8P&source=mytrips" target="_blank" onclick="event.stopPropagation()" class="hotel-link">${day.hotel}</a>` : 
                    (day.hotel || 'N/A')
                  )
                }</p>
              </div>
            </div>
            <div class="footer-detail-item">
              <i class="fa-solid fa-utensils footer-detail-icon"></i>
              <div class="footer-detail-text">
                <h5>REFEIÇÃO EM DESTAQUE</h5>
                <p>${day.restaurant || 'Livre'}</p>
              </div>
            </div>
            <div class="footer-detail-item">
              <i class="fa-solid fa-car footer-detail-icon"></i>
              <div class="footer-detail-text">
                <h5>TRANSPORTE</h5>
                <p>${day.transport || 'Privativo'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleCard(cardElement) {
  cardElement.classList.toggle("expanded");
}

function filterTimeline(filter) {
  activeFilter = filter;
  renderTimeline();
}

// 4. Countdown Timer Logic
function setupCountdown() {
  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = `
        <div class="glass-panel" style="padding: 16px 40px; border-radius: var(--border-radius-md);">
          <span class="countdown-num" style="color: var(--accent); font-size: 1.8rem; font-weight: 700;">Chegou a Hora! ✈️</span>
          <p style="color: white; font-size: 0.95rem; margin-top: 4px;">Foz do Iguaçu nos espera para a melhor viagem de todas!</p>
        </div>
      `;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  }, 1000);
}



// 6. Checklist Bagagem (Smart Packing List)
function setupChecklist() {
  const checkboxes = document.querySelectorAll(".packing-checkbox");
  const savedState = localStorage.getItem("packingChecklistState");

  if (savedState) {
    const checkedIndices = JSON.parse(savedState);
    checkboxes.forEach((cb, index) => {
      cb.checked = checkedIndices.includes(index);
    });
  }
  
  updateChecklistProgress();
}

function saveChecklistState() {
  const checkboxes = document.querySelectorAll(".packing-checkbox");
  const checkedIndices = [];

  checkboxes.forEach((cb, index) => {
    if (cb.checked) checkedIndices.push(index);
  });

  localStorage.setItem("packingChecklistState", JSON.stringify(checkedIndices));
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const checkboxes = document.querySelectorAll(".packing-checkbox");
  const total = checkboxes.length;
  const checked = document.querySelectorAll(".packing-checkbox:checked").length;
  
  const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
  
  // Update UI Elements
  document.getElementById("packingProgressFill").style.width = `${percentage}%`;
  document.getElementById("packingProgressText").innerHTML = `
    <strong>${checked}</strong> de <strong>${total}</strong> itens guardados na mala (${percentage}%)
  `;
}

// 7. Photo Gallery Lightbox
function setupLightbox() {
  const lightbox = document.getElementById("galleryLightbox");
  const closeBtn = document.getElementById("closeLightbox");
  
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Close lightbox on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
}

function openLightbox(imgSrc, captionText, infoUrl) {
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxInfoLink = document.getElementById("lightboxInfoLink");
  
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = captionText;
  
  if (infoUrl) {
    lightboxInfoLink.href = infoUrl;
    lightboxInfoLink.style.display = "inline-flex";
  } else {
    lightboxInfoLink.style.display = "none";
  }
  
  lightbox.style.display = "flex";
}


// 11. Live Weather Fetcher (Open-Meteo Integration for real-time live forecast updates)
async function updateLiveDashboardWeather() {
  try {
    // Foz do Iguaçu coordinates: lat -25.5478, lon -54.5881
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-25.5478&longitude=-54.5881&current_weather=true&timezone=America%2FSao_Paulo";
    const response = await fetch(url);
    if (!response.ok) return;
    const data = await response.json();
    
    if (data && data.current_weather) {
      const currentTemp = Math.round(data.current_weather.temperature);
      const conditionCode = data.current_weather.weathercode;
      
      // Map WMO weather codes to emojis
      let icon = "☀️";
      if (conditionCode >= 1 && conditionCode <= 3) {
        icon = "⛅";
      } else if (conditionCode >= 45 && conditionCode <= 48) {
        icon = "🌫️";
      } else if (conditionCode >= 51 && conditionCode <= 67) {
        icon = "🌧️";
      } else if (conditionCode >= 80 && conditionCode <= 82) {
        icon = "🌧️";
      } else if (conditionCode >= 95) {
        icon = "⛈️";
      }
      
      const weatherTextElement = document.getElementById("infoWeather");
      const currentPlanned = weatherTextElement.textContent.split('(')[0].trim();
      
      // Inject real-time update dynamically into the dashboard card
      weatherTextElement.innerHTML = `${currentPlanned} <span style="font-size: 0.8rem; color: var(--secondary-light); display: block; margin-top: 4px; font-weight: 500;"><i class="fa-solid fa-signal" style="font-size: 0.7rem; color: #34c759; margin-right: 4px;"></i> Foz Hoje: <strong>${currentTemp}°C</strong> ${icon}</span>`;
    }
  } catch (error) {
    console.warn("Could not fetch live weather from Open-Meteo:", error);
  }
}

// 12. PWA Bottom Navigation (Scroll Detection)
function setupBottomNav() {
  const bottomNav = document.getElementById("bottomNav");
  if (!bottomNav) return;
  
  window.addEventListener("scroll", () => {
    // If splitter view is active, the bottom nav must ALWAYS be visible
    const splitterView = document.getElementById("splitter-view");
    if (splitterView && splitterView.style.display === "block") {
      bottomNav.classList.add("visible");
      return;
    }
    
    // Show bottom nav after scrolling down 300px from hero
    if (window.scrollY > 300) {
      bottomNav.classList.add("visible");
    } else {
      bottomNav.classList.remove("visible");
    }
  });
}

// 13. PWA ScrollSpy (Highlight Active Navigation Item)
function setupScrollSpy() {
  const sections = [
    document.getElementById("itinerary"),
    document.getElementById("trip-budget"),
    document.getElementById("packing"),
    document.getElementById("border-culture"),
    document.getElementById("gallery")
  ];
  const navItems = document.querySelectorAll(".bottom-nav-item");
  
  window.addEventListener("scroll", () => {
    // Guard: If splitter tab is active, do not run scrollspy for main itinerary sections
    const splitterView = document.getElementById("splitter-view");
    if (splitterView && splitterView.style.display === "block") {
      return;
    }
    
    let current = "";
    const scrollPosition = window.scrollY + 250; // offset for highlighting slightly before top
    
    sections.forEach((section) => {
      if (!section) return;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
        current = section.getAttribute("id");
      }
    });
    
    // Extra checks for bottom of page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      current = "gallery"; // Gallery is at the very bottom
    }
    
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });
}

// 14. PWA SPA Tab Switching Logic (Itinerary vs Splitter)
function switchTab(tabId, sectionId) {
  const mainView = document.getElementById("main-travel-view");
  const splitterView = document.getElementById("splitter-view");
  const navItems = document.querySelectorAll(".bottom-nav-item");
  const bottomNav = document.getElementById("bottomNav");
  
  if (tabId === 'splitter') {
    // Show Splitter Tab
    mainView.style.display = "none";
    splitterView.style.display = "block";
    
    // Highlight Splitter Nav Link
    navItems.forEach(item => item.classList.remove("active"));
    const navSplitter = document.getElementById("navSplitter");
    if (navSplitter) navSplitter.classList.add("active");
    
    // Ensure bottom nav remains visible on splitter view
    if (bottomNav) bottomNav.classList.add("visible");
    
    // Scroll to top of Splitter View
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Show Main Itinerary Tab
    mainView.style.display = "block";
    splitterView.style.display = "none";
    
    // Scroll to specified section if any
    if (sectionId) {
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          const targetTop = target.offsetTop - 80; // Offset for sticky elements/navigation
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
      }, 50);
    }
  }
}

// 15. "Rachador de Contas" (Travel Expense Splitter Engine)
let expenses = [];
const EXCHANGE_RATE_ARS = 215 / 60000; // $60.000 ARS = R$ 215,00
const EXCHANGE_RATE_USD = 5.30;       // R$ 5,30 per USD

// Load expenses from LocalStorage
function loadExpenses() {
  try {
    const saved = localStorage.getItem("trip_expenses");
    expenses = saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Could not load expenses:", error);
    expenses = [];
  }
}

// Dynamically update currency inputs
function updateCurrencySymbol() {
  const select = document.getElementById("expCurrency");
  const symbolSpan = document.getElementById("currencySymbol");
  const alertDiv = document.getElementById("currencyConvAlert");
  const detailsSpan = document.getElementById("currencyConversionDetails");
  const amountInput = document.getElementById("expAmount");
  
  const val = select.value;
  const amt = parseFloat(amountInput.value) || 0;
  
  if (val === "BRL") {
    symbolSpan.textContent = "R$";
    alertDiv.style.display = "none";
  } else if (val === "ARS") {
    symbolSpan.textContent = "$";
    alertDiv.style.display = "block";
    const brlVal = (amt * EXCHANGE_RATE_ARS).toFixed(2);
    detailsSpan.textContent = `$${amt.toLocaleString('pt-BR')} ARS ≈ R$ ${brlVal}`;
  } else if (val === "USD") {
    symbolSpan.textContent = "$";
    alertDiv.style.display = "block";
    const brlVal = (amt * EXCHANGE_RATE_USD).toFixed(2);
    detailsSpan.textContent = `$${amt.toLocaleString('pt-BR')} USD ≈ R$ ${brlVal}`;
  }
}

// Wire real-time input keypress for currency conversion preview
document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("expAmount");
  if (amountInput) {
    amountInput.addEventListener("input", updateCurrencySymbol);
  }
});

// Add a new expense item
function addExpense() {
  const descInput = document.getElementById("expDesc");
  const amtInput = document.getElementById("expAmount");
  const currSelect = document.getElementById("expCurrency");
  const payerSelect = document.getElementById("expPayer");
  const checkboxes = document.querySelectorAll(".exp-share-check");
  
  const desc = descInput.value.trim();
  const amt = parseFloat(amtInput.value);
  const curr = currSelect.value;
  const payer = payerSelect.value;
  
  // Collect checked participants
  const shares = [];
  checkboxes.forEach(cb => {
    if (cb.checked) shares.push(cb.value);
  });
  
  if (shares.length === 0) {
    alert("Por favor, selecione ao menos uma pessoa para dividir a despesa!");
    return;
  }
  
  // Convert currency to BRL
  let brlAmount = amt;
  if (curr === "ARS") {
    brlAmount = amt * EXCHANGE_RATE_ARS;
  } else if (curr === "USD") {
    brlAmount = amt * EXCHANGE_RATE_USD;
  }
  
  // Round to 2 decimals
  brlAmount = parseFloat(brlAmount.toFixed(2));
  
  const expenseItem = {
    id: Date.now() + Math.random().toString(36).substring(2, 5), // Unique ID for absolute sync safety
    desc,
    originalAmount: amt,
    currency: curr,
    payer,
    brlAmount,
    shares,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
  };
  
  expenses.push(expenseItem);
  localStorage.setItem("trip_expenses", JSON.stringify(expenses));
  uploadExpensesToCloud();
  
  // Clear inputs
  descInput.value = "";
  amtInput.value = "";
  currSelect.value = "BRL";
  updateCurrencySymbol();
  
  recalculateSplitter();
}

// Delete expense item
function deleteExpense(index) {
  if (confirm(`Tem certeza que deseja excluir "${expenses[index].desc}"?`)) {
    expenses.splice(index, 1);
    localStorage.setItem("trip_expenses", JSON.stringify(expenses));
    uploadExpensesToCloud();
    recalculateSplitter();
  }
}

// Settle debts using the optimized Debt Simplification Engine
function recalculateSplitter() {
  let totalSpent = 0;
  let balances = { Ian: 0, Sophie: 0, Andresa: 0, Isa: 0 };
  
  // 1. Calculate raw balances
  expenses.forEach(exp => {
    totalSpent += exp.brlAmount;
    
    // Payer is credited the full BRL amount
    balances[exp.payer] += exp.brlAmount;
    
    // Each participant is debited their corresponding share
    const shareAmt = exp.brlAmount / exp.shares.length;
    exp.shares.forEach(person => {
      balances[person] -= shareAmt;
    });
  });
  
  // 2. Intelligent Family Consolidation:
  // Since Isa is a child (under 14) traveling with Andresa,
  // her expenses/debts are consolidated directly under Andresa!
  balances.Andresa += balances.Isa;
  balances.Isa = 0;
  
  // 3. Update dashboard values in UI
  const totalText = document.getElementById("splitterTotalSpent");
  const avgText = document.getElementById("splitterAverageSpent");
  if (totalText) totalText.textContent = `R$ ${totalSpent.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  // Calculate average active split (Ian & Andresa)
  const numAdults = 2; // Ian and Andresa
  const avgAmt = totalSpent / numAdults;
  if (avgText) avgText.textContent = `R$ ${avgAmt.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} por pagador`;
  
  // 4. Resolve debts (Greedy Simplifier Algorithm)
  // Split participants into positive balances (creditors) and negative balances (debtors)
  let creditors = [];
  let debtors = [];
  
  ["Ian", "Andresa"].forEach(person => {
    const bal = parseFloat(balances[person].toFixed(2));
    if (bal > 0.01) {
      creditors.push({ name: person, balance: bal });
    } else if (bal < -0.01) {
      debtors.push({ name: person, balance: Math.abs(bal) });
    }
  });
  
  let instructions = [];
  let cIdx = 0;
  let dIdx = 0;
  
  while (cIdx < creditors.length && dIdx < debtors.length) {
    let creditor = creditors[cIdx];
    let debtor = debtors[dIdx];
    
    const transferAmt = Math.min(creditor.balance, debtor.balance);
    instructions.push({
      from: debtor.name,
      to: creditor.name,
      amount: parseFloat(transferAmt.toFixed(2))
    });
    
    creditor.balance -= transferAmt;
    debtor.balance -= transferAmt;
    
    if (creditor.balance < 0.01) cIdx++;
    if (debtor.balance < 0.01) dIdx++;
  }
  
  // 5. Render debts in UI
  const statusDiv = document.getElementById("splitterSettleStatus");
  const debtsContainer = document.getElementById("splitterDebtsList");
  debtsContainer.innerHTML = "";
  
  if (instructions.length === 0) {
    if (statusDiv) statusDiv.innerHTML = `<span style="color: #34c759;"><i class="fa-solid fa-circle-check"></i> Tudo equilibrado! Ninguém deve ninguém.</span>`;
    debtsContainer.innerHTML = `<div style="text-align: center; color: rgba(255,255,255,0.4); padding: 20px; font-size: 0.95rem;"><i class="fa-solid fa-scale-balanced" style="font-size: 1.5rem; margin-bottom: 8px; display: block; color: rgba(255,255,255,0.2);"></i> Nenhuma transferência pendente no momento.</div>`;
  } else {
    if (statusDiv) statusDiv.innerHTML = `<span style="color: #ff9f0a;"><i class="fa-solid fa-triangle-exclamation"></i> Existem transferências pendentes de acerto.</span>`;
    
    instructions.forEach(inst => {
      const item = document.createElement("div");
      item.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.06); padding: 12px 16px; border-radius: var(--border-radius-sm); border-left: 4px solid #ff9f0a;";
      item.innerHTML = `
        <div style="font-size: 0.95rem; font-weight: 500; font-family: var(--font-sans);">
          <strong>${inst.from}</strong> <span style="opacity: 0.7; font-weight: 400; font-size: 0.85rem;">deve pagar a</span> <strong>${inst.to}</strong>
        </div>
        <div style="font-size: 1.1rem; font-weight: 700; color: #ff9f0a; font-family: var(--font-sans);">
          R$ ${inst.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      `;
      debtsContainer.appendChild(item);
    });
  }
  
  // Cache globally for WhatsApp sharing
  window.lastCalculatedInstructions = instructions;
  window.lastTotalSpent = totalSpent;
  window.lastAverageSpent = avgAmt;
  
  // 6. Render History in UI
  const historyContainer = document.getElementById("splitterHistory");
  historyContainer.innerHTML = "";
  
  if (expenses.length === 0) {
    historyContainer.innerHTML = `<div style="text-align: center; color: var(--text-light); padding: 30px; font-size: 0.95rem;"><i class="fa-solid fa-receipt" style="font-size: 1.8rem; margin-bottom: 8px; display: block; opacity: 0.3;"></i> Nenhum gasto registrado ainda.</div>`;
  } else {
    // Reverse to show newest on top
    [...expenses].reverse().forEach((exp, revIdx) => {
      const origIdx = expenses.length - 1 - revIdx;
      
      const item = document.createElement("div");
      item.style.cssText = "display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.02); padding: 12px; border-radius: var(--border-radius-sm); border: 1px solid rgba(0,0,0,0.04); transition: var(--transition-fast);";
      
      let currencyStr = "";
      if (exp.currency !== "BRL") {
        const symbol = exp.currency === "ARS" ? "$" : "$";
        currencyStr = `<span style="font-size: 0.78rem; color: var(--text-light); display: block;">Original: ${symbol}${exp.originalAmount.toLocaleString('pt-BR')} ${exp.currency}</span>`;
      }
      
      item.innerHTML = `
        <div style="flex-grow: 1; min-width: 0;">
          <h5 style="font-size: 0.95rem; font-weight: 600; color: var(--text-dark); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${exp.desc}</h5>
          <span style="font-size: 0.78rem; color: var(--text-light); display: block; margin-top: 2px;">
            Pago por <strong>${exp.payer}</strong> para <strong>${exp.shares.join(', ')}</strong> (${exp.date})
          </span>
          ${currencyStr}
        </div>
        <div style="display: flex; align-items: center; gap: 16px; flex-shrink: 0; margin-left: 12px;">
          <div style="text-align: right;">
            <span style="font-size: 1rem; font-weight: 700; color: var(--primary); font-family: var(--font-sans);">
              R$ ${exp.brlAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          <button onclick="deleteExpense(${origIdx})" style="background: none; border: none; color: #ff3b30; cursor: pointer; font-size: 1.1rem; padding: 4px; transition: opacity 0.2s ease;"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
      historyContainer.appendChild(item);
    });
  }
}

// Share final balances to WhatsApp
function shareDebtsToWhatsApp() {
  const instructions = window.lastCalculatedInstructions || [];
  const total = window.lastTotalSpent || 0;
  const avg = window.lastAverageSpent || 0;
  
  let msg = `*💸 Rachador de Contas Tríplice 2026*\\n`;
  msg += `------------------------------------\\n`;
  msg += `*Total de Gastos Comuns:* R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\n`;
  msg += `*Divisão Média:* R$ ${avg.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} por pagador\\n\\n`;
  msg += `*💵 Resolução de Saldos (Quem deve quem):*\\n`;
  
  if (instructions.length === 0) {
    msg += `✅ Tudo equilibrado! Ninguém deve nada para ninguém.`;
  } else {
    instructions.forEach(inst => {
      msg += `• *${inst.from}* deve pagar *R$ ${inst.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}* para *${inst.to}*\\n`;
    });
  }
  
  msg += `\\n------------------------------------\\n`;
  msg += `_Criado e calculado com amor pelo nosso PWA de Viagem_ 🧳✈️`;
  
  // Format line breaks for WhatsApp API URL
  const formattedText = msg.replace(/\\n/g, "\n");
  
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(formattedText)}`, "_blank");
}

// ==========================================================================
// PWA Cloud Synchronization Engine (Real-time Cross-device Sync)
// ==========================================================================

let syncIntervalId = null;
const SYNC_API_BASE = "/api/bins";

function initCloudSync() {
  const DEFAULT_SYNC_CODE = "0dvgTMQvj9";
  localStorage.setItem("trip_sync_bin_id", DEFAULT_SYNC_CODE);
  showConnectedUI(DEFAULT_SYNC_CODE);
  fetchExpensesFromCloud(DEFAULT_SYNC_CODE);
  startSyncPolling(DEFAULT_SYNC_CODE);
}

// Start a completely new cloud bin for the trip (unused/fallback)
async function startNewCloudSync() {
  const syncStatusIcon = document.getElementById("syncStatusIcon");
  if (syncStatusIcon) syncStatusIcon.style.animation = "spin 1s linear infinite";
  
  updateSyncStatusText("Criando sala na nuvem...");
  
  try {
    const response = await fetch(SYNC_API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ expenses: expenses })
    });
    
    if (!response.ok) throw new Error("API call failed");
    
    const data = await response.json();
    const binId = data.id;
    
    localStorage.setItem("trip_sync_bin_id", binId);
    showConnectedUI(binId);
    startSyncPolling(binId);
    showSyncFlash("Conectado!", "#34c759");
    
  } catch (error) {
    console.error("Cloud sync creation failed:", error);
    updateSyncStatusText("Erro ao conectar. Tente novamente.");
    if (syncStatusIcon) syncStatusIcon.style.animation = "none";
  }
}

// Show/Hide code input overlay
function showConnectSyncInput() {
  const wrapper = document.getElementById("syncInputWrapper");
  if (wrapper) wrapper.style.display = "block";
}

function hideConnectSyncInput() {
  const wrapper = document.getElementById("syncInputWrapper");
  if (wrapper) wrapper.style.display = "none";
  const input = document.getElementById("syncCodeInput");
  if (input) input.value = "";
}

// Connect to an existing room using a code (binId)
async function connectToExistingSync() {
  const codeInput = document.getElementById("syncCodeInput");
  if (!codeInput) return;
  const binId = codeInput.value.trim();
  
  if (!binId) {
    alert("Por favor, digite um código válido!");
    return;
  }
  
  updateSyncStatusText("Verificando código...");
  
  try {
    const response = await fetch(`${SYNC_API_BASE}?id=${binId}`);
    if (!response.ok) throw new Error("Invalid code or connection issue");
    
    const data = await response.json();
    const cloudExpenses = data.expenses || [];
    
    // Deduplicate and merge expenses
    if (confirm("Código válido! Deseja mesclar as despesas locais deste celular com as da nuvem?")) {
      expenses = mergeExpenses(expenses, cloudExpenses);
      localStorage.setItem("trip_expenses", JSON.stringify(expenses));
      recalculateSplitter();
      
      // Update cloud with merged list
      await fetch(`${SYNC_API_BASE}?id=${binId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ expenses: expenses })
      });
    } else {
      // Just overwrite with cloud expenses
      expenses = cloudExpenses;
      localStorage.setItem("trip_expenses", JSON.stringify(expenses));
      recalculateSplitter();
    }
    
    localStorage.setItem("trip_sync_bin_id", binId);
    showConnectedUI(binId);
    startSyncPolling(binId);
    hideConnectSyncInput();
    showSyncFlash("Conectado!", "#34c759");
    
  } catch (error) {
    console.error("Failed to connect to existing sync:", error);
    updateSyncStatusText("Código inválido ou sem internet.");
    alert("Código de sala inválido ou falha de conexão. Verifique o código e tente novamente!");
  }
}

// Disconnect from cloud sync
function disconnectCloudSync() {
  if (confirm("Tem certeza que deseja desconectar? Suas contas não serão mais sincronizadas com outros celulares em tempo real (ficarão apenas localmente).")) {
    stopSyncPolling();
    localStorage.removeItem("trip_sync_bin_id");
    showDisconnectedUI();
    showSyncFlash("Desconectado", "rgba(255,255,255,0.4)");
  }
}

// Fetch latest data from cloud (once)
async function fetchExpensesFromCloud(binId) {
  try {
    const response = await fetch(`${SYNC_API_BASE}?id=${binId}`);
    if (!response.ok) throw new Error("Fetch failed");
    
    const data = await response.json();
    const cloudExpenses = data.expenses || [];
    
    // Merge and save
    expenses = mergeExpenses(expenses, cloudExpenses);
    localStorage.setItem("trip_expenses", JSON.stringify(expenses));
    recalculateSplitter();
    
    // Update cloud with merged
    await fetch(`${SYNC_API_BASE}?id=${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ expenses: expenses })
    });
    
  } catch (error) {
    console.error("Failed to fetch cloud expenses on load:", error);
    updateSyncStatusText("Carregado offline. Conectando...");
  }
}

// Upload expenses to cloud (runs in background on add/delete)
async function uploadExpensesToCloud() {
  const binId = localStorage.getItem("trip_sync_bin_id");
  if (!binId) return;
  
  const syncStatusIcon = document.getElementById("syncStatusIcon");
  if (syncStatusIcon) syncStatusIcon.style.animation = "spin 1s linear infinite";
  updateSyncStatusText("Sincronizando com a nuvem...");
  
  try {
    const response = await fetch(`${SYNC_API_BASE}?id=${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ expenses: expenses })
    });
    
    if (!response.ok) throw new Error("Upload failed");
    
    updateSyncStatusText("Sincronizado na Nuvem");
    showSyncFlash("✓ Salvo", "#34c759");
    
  } catch (error) {
    console.error("Failed to upload expenses to cloud:", error);
    updateSyncStatusText("Alterações salvas localmente (Offline)");
    showSyncFlash("Sem Conexão", "#ff9f0a");
  } finally {
    if (syncStatusIcon) syncStatusIcon.style.animation = "none";
  }
}

// Polling Loop: Check for cloud updates every 8 seconds
function startSyncPolling(binId) {
  stopSyncPolling();
  
  syncIntervalId = setInterval(async () => {
    // Only poll if page is active
    if (document.hidden) return;
    
    const syncStatusIcon = document.getElementById("syncStatusIcon");
    if (syncStatusIcon) syncStatusIcon.style.animation = "spin 1s linear infinite";
    
    try {
      const response = await fetch(`${SYNC_API_BASE}?id=${binId}`);
      if (!response.ok) throw new Error("Polling fetch failed");
      
      const data = await response.json();
      const cloudExpenses = data.expenses || [];
      
      // Compare arrays by length and IDs/hashes to check if actually changed
      const localHash = JSON.stringify(expenses.map(e => ({ id: e.id, desc: e.desc, amt: e.brlAmount })));
      const cloudHash = JSON.stringify(cloudExpenses.map(e => ({ id: e.id, desc: e.desc, amt: e.brlAmount })));
      
      if (localHash !== cloudHash) {
        expenses = mergeExpenses(expenses, cloudExpenses);
        localStorage.setItem("trip_expenses", JSON.stringify(expenses));
        recalculateSplitter();
        showSyncFlash("Contas Atualizadas!", "#34c759");
      }
      
      updateSyncStatusText("Sincronizado na Nuvem");
      
    } catch (error) {
      console.warn("Polling sync failed (probably offline):", error);
      updateSyncStatusText("Conexão instável. Tentando novamente...");
    } finally {
      if (syncStatusIcon) syncStatusIcon.style.animation = "none";
    }
  }, 8000);
}

// Stop synchronization polling loop
function stopSyncPolling() {
  if (syncIntervalId) {
    clearInterval(syncIntervalId);
    syncIntervalId = null;
  }
}

// Deduplicate and merge two arrays of expenses safely
function mergeExpenses(local, cloud) {
  const map = new Map();
  
  local.forEach(e => {
    if (!e.id) e.id = Date.now() + Math.random().toString(36).substring(2, 5); // Fallback for old items
    map.set(e.id, e);
  });
  
  cloud.forEach(e => {
    if (!e.id) e.id = Date.now() + Math.random().toString(36).substring(2, 5);
    map.set(e.id, e);
  });
  
  return Array.from(map.values());
}

// UI State Switchers
function showConnectedUI(binId) {
  const badge = document.getElementById("syncBadge");
  if (badge) {
    badge.textContent = "Nuvem";
    badge.style.background = "#34c759";
    badge.style.color = "white";
  }
  
  const text = document.getElementById("syncStatusText");
  if (text) {
    text.textContent = "Contas sincronizadas com outros dispositivos em tempo real.";
  }
  
  const actions = document.getElementById("syncActions");
  if (actions) actions.style.display = "none";
  
  const wrapper = document.getElementById("syncInputWrapper");
  if (wrapper) wrapper.style.display = "none";
  
  const info = document.getElementById("syncConnectedInfo");
  if (info) info.style.display = "flex";
  
  const display = document.getElementById("syncCodeDisplay");
  if (display) display.textContent = binId;
  
  const icon = document.getElementById("syncStatusIcon");
  if (icon) icon.style.color = "#34c759";
}

function showDisconnectedUI() {
  const badge = document.getElementById("syncBadge");
  if (badge) {
    badge.textContent = "Local";
    badge.style.background = "rgba(255,255,255,0.1)";
    badge.style.color = "rgba(255,255,255,0.7)";
  }
  
  const text = document.getElementById("syncStatusText");
  if (text) {
    text.textContent = "Seus dados estão salvos apenas localmente neste celular.";
  }
  
  const actions = document.getElementById("syncActions");
  if (actions) actions.style.display = "flex";
  
  const wrapper = document.getElementById("syncInputWrapper");
  if (wrapper) wrapper.style.display = "none";
  
  const info = document.getElementById("syncConnectedInfo");
  if (info) info.style.display = "none";
  
  const icon = document.getElementById("syncStatusIcon");
  if (icon) icon.style.color = "rgba(255,255,255,0.6)";
}

// Update status description text
function updateSyncStatusText(text) {
  const statusEl = document.getElementById("syncStatusText");
  if (statusEl) statusEl.textContent = text;
}

// Quick status flash toast effect on the cloud icon
function showSyncFlash(text, color) {
  const statusIcon = document.getElementById("syncStatusIcon");
  if (!statusIcon) return;
  
  const originalColor = statusIcon.style.color;
  const originalHtml = statusIcon.innerHTML;
  
  statusIcon.style.color = color;
  statusIcon.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i>`;
  statusIcon.style.animation = "spin 0.5s ease-out 1";
  
  setTimeout(() => {
    statusIcon.style.animation = "none";
    statusIcon.style.color = originalColor;
    statusIcon.innerHTML = originalHtml;
  }, 1000);
}
