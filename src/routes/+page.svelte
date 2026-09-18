<script>
    import Footer from '$lib/components/Footer.svelte';
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

<Footer githubHandle= {data.person.github_handle}/>

<style>
:root {
		--color-background: #fdf2f8;
		--color-card: #ffffff;
		--color-primary: #8c38a8;
		--color-accent: #f9c9dd;
		--color-text: #3a2440;
		--color-text-muted: #7a6580;
	}

	:global(body) {
		background: var(--color-background);
		margin: 0;
		font-family: system-ui, sans-serif;
		color: var(--color-text);
	}

    /*header styling*/

	main {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}

	.profile-card {
		background: var(--color-card);
		border-radius: 25px;
		padding: 2rem;
		max-width: 350px;
		width: 100%;
		text-align: center;
		box-shadow: 0 8px 24px var(--color-primary);
	}

	.profile-avatar {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		object-fit: cover;
		margin: 1rem;
		border: 3px solid var(--color-accent);
	}

	h1 {
		margin: 0;
		font-size: 1.5rem;
		color: var(--color-primary);
	}

	.profile-bio {
		font-size: 1rem;
		color: var(--color-primary);
		font-weight: 600;
		margin: 0.2rem 0 0.3rem;
	}

	.profile-info {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		line-height: 1.5;
		margin: 0 0 1.5rem;
	}

	.interest-list {
		display: flex;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.interest-tag {
		background: var(--color-accent);
		border-radius: 20px;
		padding: 6px 14px;
	}

	.interest-tag summary {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 0.8rem;
		color: var(--color-primary);
		font-weight: 500;
	}

	.tag-icon {
		width: 14px;
		height: 14px;
	}

	.popover-image {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
		margin-top: 5px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	
</style>