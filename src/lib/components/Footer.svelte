<script>
	let { githubHandle } = $props();
</script>

<footer class="site-footer">
	<a class="footer-link" href="https://github.com/{githubHandle}" target="_blank" rel="noopener">
		<img class="footer-icon" src="/github.svg" alt="" />
		GitHub
	</a>
	<a class="footer-link" href="https://nl.linkedin.com/in/heba-h-0682b4332" target="_blank" rel="noopener">
		<img class="footer-icon" src="/linkedin.svg" alt="" />
		LinkedIn
	</a>
	<a class="footer-link" href="mailto:heba.handouka@hva.nl">
		<img class="footer-icon" src="/mail.svg" alt="" />
		Email
	</a>
</footer>

<style>
	.site-footer {
		display: flex;
		justify-content: center;
		gap: 1.2rem;
		padding: 1.5rem;
	}

	.footer-link {
		font-size: 0.85rem;
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
	}

	.footer-link:hover {
		text-decoration: underline;
	}

	.footer-link {
		display: flex;
		align-items: center;
		gap: 5px;
    }

    .footer-icon {
        width: 16px;
        height: 16px;
    }
</style>