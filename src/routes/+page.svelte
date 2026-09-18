<script>
	let { data } = $props();
    const mugshotUrl = `https://fdnd.directus.app/assets/${data.person.mugshot_year2}`;
</script>

<header>

</header>

<main>
    <section class="profile-card">
        <img class="profile-avatar" src={mugshotUrl} alt={data.person.name}/>
        <h1>{data.person.name}</h1>
        <p class="profile-bio">{data.person.bio}</p>
        <p class="profile-info">Hi, ik ben Heba 22 jaar oud en ik volg de opleiding FDND aan het HvA ;)</p>

        <div class="interest-list">
            <details class="interest-tag">
                <summary> 
                    <img class="tag-icon" src="/location.svg" alt="" />Amsterdam
                </summary>
                <img class="popover-image" src="/amsterdam.jpg" alt="Amsterdam" />
            </details>

            <details class="interest-tag">
                <summary> 
                    <img class="tag-icon" src="/egypt.svg" alt="" />Egypte
                </summary>
                <img class="popover-image" src="/egypt.jpg" alt="Egypt" />
            </details>

            <details class="interest-tag">
                <summary> 
                    <img class="tag-icon" src="/music.svg" alt="" />Muziek
                </summary>
                <img class="popover-image" src="/drake.jpg" alt="Music" />
            </details>

            <details class="interest-tag">
                <summary> 
                    <img class="tag-icon" src="/coding.svg" alt="" />Code
                </summary>
                <img class="popover-image" src="/coding.jpg" alt="Code" />
            </details>
	    </div>
    </section>    
</main>

<footer></footer>

<style>
	
</style>