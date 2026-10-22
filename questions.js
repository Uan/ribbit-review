// Shared ASWB-style question bank for Ribbit Quest (index.html) and practice mode (practice/).
// Each option is [answer, why]; c is the index of the best answer. Ids must never change: saved progress uses them.
window.RIBBIT_Q = /* Q-START */ [
    // ---------------- Values & Ethics ----------------
    { id: "e1", cat: "ethics",
      text: "At their last session, a client who has worked with a social worker for a year gives her a small handmade bracelet. In the client's culture, a small gift is a common way to say thank you. The agency has no gift policy.",
      ask: "What is the BEST response?",
      opts: [
        ["Thank the client warmly, accept the bracelet, and note it in the record.", "A small gift with cultural meaning, given as services end, can usually be accepted. Refusing it could feel like rejecting the client and her culture. Writing it down keeps things transparent."],
        ["Kindly decline and explain that professional rules don't allow gifts from clients.", "There's no blanket ban on small gifts. Refusing here could hurt the relationship right when you're trying to end it well."],
        ["Accept the bracelet and give the client a small gift in return so it feels even.", "Trading gifts turns it into a social exchange. Receiving graciously is enough."],
        ["Accept the bracelet and let the client know she's welcome to stay in touch as a friend.", "Becoming friends after services end creates a dual relationship. Keep the ending professional."]
      ],
      c: 0,
      tip: "Small gift + cultural meaning + end of services = usually okay to accept. Expensive gifts or strings attached are not." },

    { id: "e2", cat: "ethics",
      text: "A client tells his social worker that he bought a handgun last week. He says he will shoot his former business partner, whom he names, when he sees him at a meeting on Friday. He refuses to talk about it further.",
      ask: "Which action BEST meets the social worker's legal and ethical duties?",
      opts: [
        ["Warn the partner and notify the police, following state law.", "This is a serious, foreseeable, and imminent threat against a named person, and he has the means. Confidentiality gives way when disclosure is needed to prevent serious harm (the Tarasoff principle)."],
        ["Keep this confidential and focus the next sessions on his anger toward his partner.", "Confidentiality isn't absolute. A weapon, a named victim, and a date call for protective action now."],
        ["Wait to see whether he repeats the threat at the next session before acting.", "Friday is days away. Waiting could cost someone their life."],
        ["Ask the client to sign a release before contacting anyone about the threat.", "You don't need the client's permission to act when someone faces serious, imminent harm."]
      ],
      c: 0,
      tip: "Specific threat + identifiable victim + means + timeline = duty to protect. Safety beats confidentiality." },

    { id: "e3", cat: "ethics",
      text: "A social worker notices that a coworker has smelled of alcohol at several morning meetings. The coworker has also missed two client appointments this month.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Report the coworker to the state licensing board.", "Outside reporting comes later, if talking with the coworker and using agency channels don't fix the problem."],
        ["Talk privately with the coworker about the concerns.", "When it's feasible, the Code asks social workers to first talk with an impaired colleague and help them take steps to address it. If that doesn't work, go through proper channels."],
        ["Tell the agency director about the coworker's drinking.", "Going to a supervisor or director is the next step if the direct conversation doesn't lead to change, unless clients are in immediate danger."],
        ["Let the coworker's clients know they can ask for a new worker.", "This breaks the coworker's privacy and skips every appropriate step."]
      ],
      c: 1,
      tip: "Colleague problem? Go to the colleague first, then the supervisor or agency, then outside bodies." },

    { id: "e4", cat: "ethics",
      text: "A client who is a real estate agent learns that her social worker is house hunting. She offers to help the social worker find a home and to cut her commission as a thank-you.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept her help, but insist on paying the full commission so it stays fair.", "Paying full price doesn't solve it. It's still a business relationship with a current client."],
        ["Decline the offer kindly and keep the relationship professional.", "A business deal with a current client is a dual relationship that risks exploitation and blurs the work. It's avoidable here, so avoid it, kindly."],
        ["Accept the offer, since the client suggested it and seems happy to help.", "Who suggests it doesn't matter. The social worker is responsible for setting boundaries."],
        ["Wait until services end, then hire the client as an agent.", "Business with a former client still risks exploitation and can blur the boundaries of the past work."]
      ],
      c: 1,
      tip: "Avoidable dual relationship? Avoid it. The social worker always owns the boundary." },

    { id: "e5", cat: "ethics",
      text: "At intake, a 15-year-old client, her mother, and the social worker agreed that what the teen says in sessions stays private unless there's a safety concern. A month later, the mother calls and asks what her daughter has been talking about.",
      ask: "What is the BEST response?",
      opts: [
        ["Share a brief summary of the sessions, since the mother is the teen's legal guardian.", "Breaking the agreement without a safety concern would damage the teen's trust and the work."],
        ["Remind the mother of the agreement and invite her to share her concerns.", "Keep the confidentiality agreement made at intake while still listening to the parent. You can also offer a family session if the teen agrees."],
        ["Decline to talk with the mother and end the call politely.", "Parents are part of a minor's support system. You can listen to her without sharing what the teen said."],
        ["Ask the teen to tell her mother what they talk about in sessions.", "That pressures the teen and undercuts the privacy everyone agreed to."]
      ],
      c: 1,
      tip: "With minors, set confidentiality limits with everyone at the start, then keep the agreement. Safety is the exception." },

    { id: "e6", cat: "ethics",
      text: "A social worker receives a subpoena for a client's records. It comes from the attorney for the client's ex-husband in a custody case.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Send the records, since a subpoena is a legal order.", "A subpoena is not a court order. Don't release records without the client's consent or a judge's order."],
        ["Contact the client about the subpoena and discuss her wishes.", "The privilege belongs to the client. Tell her, talk through her wishes, and get legal advice if needed. Don't release anything yet."],
        ["Ignore the subpoena, since client records are confidential.", "You must respond to a subpoena. Responding can mean asserting privilege on the client's behalf, not handing over records."],
        ["Remove sensitive notes from the file before anything is sent.", "Altering records is unethical and can be illegal."]
      ],
      c: 1,
      tip: "A subpoena isn't a court order. Contact the client first. Release only with consent or a judge's order." },

    { id: "e7", cat: "ethics",
      text: "An 84-year-old man lives alone. He's mentally sharp, manages his own medications, and keeps his home safe, though cluttered. His adult children want him to move to assisted living. He wants to stay home.",
      ask: "What should the social worker do?",
      opts: [
        ["Support his choice and explore services that help him stay safely at home.", "He has capacity and isn't in danger, so his right to self-determination comes first. Supportive services respect his choice."],
        ["Help the children find an assisted living facility he might like.", "This works around his clearly stated wishes."],
        ["Request a capacity evaluation before honoring his decision.", "Nothing here suggests impaired capacity. Age alone isn't a reason to question it."],
        ["Hold a family meeting so his children can persuade him that moving is safer.", "A family meeting can help, but not to talk a capable adult out of his own choice."]
      ],
      c: 0,
      tip: "Capable adult + no serious danger = the client decides." },

    { id: "e8", cat: "ethics",
      text: "A woman who speaks limited English comes in for her first appointment. Her 12-year-old son, who speaks English well, offers to interpret.",
      ask: "What should the social worker do?",
      opts: [
        ["Accept the son's offer, since his mother seems comfortable with him.", "Children shouldn't interpret. It burdens them, and the mother may hold back sensitive information."],
        ["Arrange for a qualified professional interpreter.", "Informed consent requires that the client truly understands. A trained interpreter is accurate, neutral, and bound by confidentiality."],
        ["Speak slowly in simple English and give her written handouts.", "Simplified English doesn't make sure she understands, so it isn't true informed consent."],
        ["Reschedule until the client can bring an adult relative to interpret.", "Relatives aren't neutral or trained, and this delays services."]
      ],
      c: 1,
      tip: "Language barrier = qualified interpreter. Never kids, ideally not family." },

    { id: "e9", cat: "ethics",
      text: "A current client sends her social worker a friend request on the social worker's personal social media account.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept the request, but adjust the privacy settings to limit what the client can see.", "Any personal online connection with a client blurs boundaries."],
        ["Ignore the request and don't bring it up.", "Silence can feel like rejection. Talking about it helps the client understand the boundary."],
        ["Decline the request and talk about it with the client at the next session.", "Personal social media connections with clients create dual relationships. Explain the boundary kindly. Ideally the agency's social media policy is covered at intake."],
        ["End services, since the client crossed a professional boundary.", "This is a normal boundary to talk through, not a reason to terminate."]
      ],
      c: 2,
      tip: "Friend request from a client = decline and discuss. Boundaries get explained, not just enforced." },

    { id: "e10", cat: "ethics",
      text: "A client who recently lost his job says he can't afford his sessions anymore. He offers to paint the social worker's house instead of paying.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept, since it lets him keep getting the help he needs.", "Bartering services creates a dual relationship and room for conflict. What if the paint job goes badly?"],
        ["Accept, as long as the value of the work equals the fees.", "Matching the value doesn't remove the dual relationship."],
        ["Decline, and explore a sliding fee scale or low-cost options.", "The Code says to avoid taking goods or services as payment except in very limited situations. Help him keep services another way."],
        ["Decline, and pause services until he can pay again.", "Stopping abruptly abandons the client. Look for ways to continue."]
      ],
      c: 2,
      tip: "Bartering = generally no. Find another way to keep services going." },

    { id: "e11", cat: "ethics",
      text: "A social worker is leaving her agency in six weeks for a new job. She has an active caseload of 25 clients.",
      ask: "What is the BEST way to handle her caseload?",
      opts: [
        ["Wait until her last week to tell clients, so they aren't upset for too long.", "Clients need time to process the ending and get ready for a new worker."],
        ["Tell clients soon, talk through the ending, and explain their options.", "Clients deserve advance notice, a chance to talk about the ending, and a smooth handoff so their care continues."],
        ["Close all cases now so the next worker can start fresh.", "Closing cases early cuts clients off without proper termination."],
        ["Let her supervisor tell clients after she has left.", "Leaving without a goodbye can feel like abandonment and skips important termination work."]
      ],
      c: 1,
      tip: "Worker leaving = tell clients early, process feelings, transfer smoothly." },

    { id: "e12", cat: "ethics",
      text: "A social worker feels strong irritation toward a new client who reminds her of her abusive ex-partner. She finds herself dreading their sessions.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Transfer the client to another worker right away.", "A transfer may be needed later, but first understand and manage the reaction with help."],
        ["Tell the client about her feelings so the relationship stays honest.", "Sharing her personal reaction burdens the client and isn't for the client's benefit."],
        ["Seek supervision to explore and manage her reaction.", "This is countertransference. Supervision helps her stay objective so the client gets good care."],
        ["Push the feelings aside and stay professional in sessions.", "Ignored countertransference tends to leak into the work."]
      ],
      c: 2,
      tip: "Strong feelings about a client = supervision first." },

    { id: "e13", cat: "ethics",
      text: "An agency adopts a new policy: clients who miss two appointments are discharged automatically, with no outreach. A social worker believes this will hurt her most vulnerable clients.",
      ask: "What is the BEST action?",
      opts: [
        ["Quietly ignore the policy for her own clients.", "Secretly breaking policy isn't advocacy, and it treats clients unequally."],
        ["Follow the policy as written, since agency rules take priority over her views.", "Social workers are expected to work to change policies that harm clients."],
        ["Report the agency to the state licensing board.", "Licensing boards regulate individual practitioners, and this skips the internal channels."],
        ["Raise her concerns with administration and advocate for a change.", "The Code asks social workers to work to improve agency policies that conflict with clients' interests, through proper channels first."]
      ],
      c: 3,
      tip: "Harmful policy = advocate inside the system first." },

    { id: "e14", cat: "ethics",
      text: "During a home visit, a social worker notices finger-shaped bruises on a 6-year-old's upper arm. His mother says he fell off his bike.",
      ask: "What should the social worker do?",
      opts: [
        ["Ask the child detailed questions to find out what really happened.", "Investigating is child protective services' job. Detailed questioning can also upset the child and taint a later forensic interview."],
        ["Document the bruises and check on them at the next visit.", "Waiting leaves the child at risk. Reasonable suspicion means you report now."],
        ["Make a report to child protective services.", "Finger-shaped bruises don't fit a bike fall. Mandated reporters need reasonable suspicion, not proof."],
        ["Help the mother make a safety plan before deciding whether to report.", "Planning with the parent doesn't replace the legal duty to report, and it may alert an abuser."]
      ],
      c: 2,
      tip: "Reasonable suspicion = report. You don't have to be sure, and you don't investigate." },

    { id: "e15", cat: "ethics",
      text: "A longtime client has died. Her adult son calls the social worker and asks what his mother talked about in therapy. He says it would help him grieve.",
      ask: "What is the BEST response?",
      opts: [
        ["Share general themes, since it may help him heal.", "Even general themes are confidential information."],
        ["Share what he asks, since confidentiality ends when a client dies.", "It doesn't. The Code says to protect deceased clients' confidentiality too."],
        ["Express sympathy and explain that her confidentiality continues after death.", "Confidentiality survives death. Records can be released only as the law allows, such as to the estate's legal representative. You can still offer support or grief resources."],
        ["Suggest he request his mother's complete record from the agency's records office.", "Sending him for the record skips the legal requirements for release."]
      ],
      c: 2,
      tip: "Confidentiality doesn't end when the client dies." },

    { id: "e16", cat: "ethics",
      text: "Three years after services ended, a former client runs into his social worker at a coffee shop and asks her out on a date.",
      ask: "How should the social worker respond?",
      opts: [
        ["Accept, since more than two years have passed since termination.", "The two-year rule comes from other professions' codes. The NASW Code sets no waiting period."],
        ["Decline, because romantic relationships with former clients risk harm.", "The NASW Code says social workers should not have sexual relationships with former clients. Anyone claiming an exception carries the full burden of proving there was no exploitation."],
        ["Accept, as long as the former client is the one who asked.", "Who initiates doesn't change the social worker's responsibility."],
        ["Accept, but only after checking in with a supervisor.", "Supervision doesn't make it okay. This is a clear boundary, so decline."]
      ],
      c: 1,
      tip: "Former clients: no dating. Under the NASW Code, no amount of time makes it okay." },

    { id: "e17", cat: "ethics",
      text: "A client has been seeing a social worker by video. The client is moving to another state next month and wants to keep meeting online.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Continue as usual, since she's licensed in the state where she works.", "With telehealth, the rules of the state where the client is located generally apply."],
        ["Find out the licensing rules in the client's new state.", "Social workers must follow the laws of the jurisdiction where the client is. She may need a license there before continuing."],
        ["End services and refer the client to someone in the new state.", "That may end up being the plan, but first she should learn whether she can legally continue."],
        ["Switch to phone calls, since phone sessions don't need a license.", "Phone counseling is still practice and still needs the right license."]
      ],
      c: 1,
      tip: "Telehealth: ask where the client is sitting." },

    { id: "e18", cat: "ethics",
      text: "A client asks to read her case record. The social worker worries that some notes about the client's diagnosis may upset her.",
      ask: "What is the BEST response?",
      opts: [
        ["Refuse access, since the records belong to the agency.", "Clients have a right to reasonable access to their records."],
        ["Give her a summary instead of the actual record.", "Limiting access is only for exceptional cases with compelling evidence of serious harm. Worry about upset isn't enough."],
        ["Remove the upsetting notes before she reads the record.", "Altering records is never acceptable."],
        ["Provide access and offer to go over the record with her.", "The Code calls for reasonable access, plus help interpreting the record when it might be misunderstood or upsetting."]
      ],
      c: 3,
      tip: "Clients can see their records. You can help them understand what they read." },

    { id: "e19", cat: "ethics",
      text: "A court-ordered client tells the social worker she doesn't want to sign a release that would let attendance reports go to the court.",
      ask: "What should the social worker do?",
      opts: [
        ["Explain her right to refuse and the possible consequences of refusing.", "Involuntary clients still get informed consent: what services involve, where information goes, and what refusing could mean. For example, the court may see her as not complying."],
        ["Tell her she has no choice because the services are court-ordered.", "She can refuse. She just needs to understand the consequences."],
        ["Send the reports anyway, since the court ordered treatment.", "An order to attend treatment isn't consent to release information. Sending reports without a release breaks confidentiality."],
        ["End services, since she won't cooperate with the court order.", "Her refusal is something to talk through, not a reason to terminate."]
      ],
      c: 0,
      tip: "Mandated clients still get informed consent, including the right to refuse and what follows." },

    { id: "e20", cat: "ethics",
      text: "A social worker going through a painful divorce notices she has trouble concentrating in sessions. Last week she forgot an important detail a client had shared.",
      ask: "What should the social worker do?",
      opts: [
        ["Keep working as usual, since the stress is temporary and will pass on its own.", "Her difficulties are already affecting clients."],
        ["Tell her clients about the divorce so they understand.", "That self-disclosure meets her needs, not theirs."],
        ["Seek help, talk with her supervisor, and adjust her workload if needed.", "The Code asks social workers whose personal problems affect their work to get help and take steps, like lightening the workload, to protect clients."],
        ["Resign until the divorce is final.", "An extreme step. There are other ways to protect clients first."]
      ],
      c: 2,
      tip: "Your own stress affecting the work = get help and protect clients. Self-care is an ethical duty." },

    // ---------------- Assessment & Planning ----------------
    { id: "a1", cat: "assess",
      text: "A woman is referred by her doctor for help with “stress.” This is her first meeting with the social worker.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Give her a standardized anxiety screening tool.", "Tools can help later, after you've heard her story."],
        ["Ask her to describe, in her own words, what brought her in.", "Start where the client is. Her view of the problem guides the whole assessment."],
        ["Explain the treatment options the agency offers so she can choose one.", "You can't recommend services before you understand the problem."],
        ["Call her doctor to learn more about the referral.", "You'd need her consent first, and her own account comes first anyway."]
      ],
      c: 1,
      tip: "FIRST in a first session = engage and hear the client's view." },

    { id: "a2", cat: "assess",
      text: "During a session, a client says quietly, “Sometimes I think everyone would be better off without me.”",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Reassure him that his family and friends care about him and would miss him.", "Reassurance can shut the conversation down before you know the risk."],
        ["Ask him directly whether he's thinking about killing himself.", "This statement can signal suicidal thinking. Asking directly doesn't plant the idea. It opens the door to an honest risk assessment."],
        ["Arrange for him to be hospitalized right away.", "You don't know the level of risk yet. Assess first."],
        ["Explore what has been going well in his life lately.", "Strengths matter, but possible suicidal thinking must be assessed first."]
      ],
      c: 1,
      tip: "A hint of suicide = ask directly. Asking doesn't increase risk." },

    { id: "a3", cat: "assess",
      text: "A daughter brings in her 78-year-old mother, who has become confused and agitated over the past three days. The daughter says this is very unlike her.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Give a mental status exam to check for dementia.", "Dementia develops gradually. A sudden change points to a medical cause first."],
        ["Help the daughter look into memory care facilities.", "Far too early. There's no diagnosis yet."],
        ["Refer the mother for an immediate medical evaluation.", "Sudden confusion in an older adult may be delirium, from an infection, medication, or dehydration. It's urgent and often reversible."],
        ["Explore recent stressors that might explain the change.", "Stress doesn't usually cause sudden confusion. Rule out medical causes first."]
      ],
      c: 2,
      tip: "Sudden change, especially in an older adult = medical evaluation first." },

    { id: "a4", cat: "assess",
      text: "A social worker is using a strengths-based approach with a father who was recently laid off and is behind on rent.",
      ask: "Which question BEST reflects this approach?",
      opts: [
        ["“What do you think led to losing your job?”", "This looks for the problem's cause, not the client's strengths."],
        ["“How have you gotten through hard times before?”", "Strengths-based assessment looks for past coping, skills, and resources the client can build on."],
        ["“How many months behind on rent are you?”", "Useful facts, but it's problem-focused."],
        ["“Have you thought about a cheaper apartment?”", "This jumps to advice instead of finding strengths."]
      ],
      c: 1,
      tip: "Strengths perspective = look for what's already working." },

    { id: "a5", cat: "assess",
      text: "A new client mentions she was hospitalized for depression two years ago. The social worker thinks those records would help the assessment.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Call the hospital and request the records.", "Not without the client's written consent."],
        ["Explain why the records would help and ask her to sign a release.", "Collateral information is valuable, but you need the client's informed, written consent to get it."],
        ["Ask the client to describe everything that happened in the hospital.", "Pushing for every detail this early can feel intrusive, and her memory may differ from the records."],
        ["Note in the record that she has a history of major depression.", "Don't record a diagnosis you haven't verified."]
      ],
      c: 1,
      tip: "Collateral information = consent first." },

    { id: "a6", cat: "assess",
      text: "A social worker and a client who has panic attacks are writing treatment goals together.",
      ask: "Which goal is written in the MOST measurable way?",
      opts: [
        ["Client will understand the underlying causes of her anxiety by the end of treatment.", "“Understand” can't be observed or counted."],
        ["Client will feel calmer and more confident in social situations over the next few months.", "“Feel calmer” is vague, with no number or clear timeframe."],
        ["Client will reduce panic attacks from five per week to one per week within eight weeks.", "A specific behavior, a baseline, a target, and a deadline. You can measure it."],
        ["Client will work on her anxiety by attending counseling and completing homework.", "Attending sessions is an activity, not an outcome."]
      ],
      c: 2,
      tip: "Measurable = what, how much, by when." },

    { id: "a7", cat: "assess",
      text: "A client staying in a shelter is depressed and needs housing. She says finding an apartment is all she can think about. The social worker believes depression should be the main focus.",
      ask: "How should the social worker proceed?",
      opts: [
        ["Begin with housing, the client's priority, and address depression along the way.", "Start where the client is. Meeting basic needs builds trust, and housing stress feeds the depression."],
        ["Focus on the depression first, since treating it will make house hunting easier.", "This overrides the client's priorities and her basic needs."],
        ["Refer her to a housing agency and pause services until she's settled.", "She needs both. Don't drop her mental health support."],
        ["Explain to her why treating depression first is in her best interest.", "Talking the client into your priorities isn't collaboration."]
      ],
      c: 0,
      tip: "The client's priority and basic needs come first." },

    { id: "a8", cat: "assess",
      text: "A social worker is assessing a client from a cultural background the social worker knows little about.",
      ask: "What is the BEST approach?",
      opts: [
        ["Read about the client's culture and apply what she learns to the assessment.", "Learning is good, but general facts can turn into stereotypes. Individuals vary."],
        ["Treat the client the same as every other client to avoid bias.", "Ignoring culture overlooks what matters to the client."],
        ["Ask the client how his culture shapes the way he sees the problem.", "Cultural humility: the client is the expert on his own culture and experience."],
        ["Refer the client to a worker who shares his cultural background.", "Matching isn't required, and it can tell the client you can't serve him."]
      ],
      c: 2,
      tip: "Culture question? Ask the client. They're the expert." },

    { id: "a9", cat: "assess",
      text: "A social worker is completing an intake and needs to ask about alcohol use.",
      ask: "Which question is MOST likely to get accurate information?",
      opts: [
        ["“You don't drink much, do you?”", "A leading question that invites a “no.”"],
        ["“Do you have a problem with drinking?”", "Asking about a “problem” invites denial and can sound judgmental."],
        ["“How many drinks do you have in a typical week?”", "Matter-of-fact and specific. It assumes drinking may happen, which makes honest answers easier."],
        ["“Why do you think some people end up drinking too much?”", "Too abstract. It doesn't get at the client's own use."]
      ],
      c: 2,
      tip: "Ask about sensitive behavior plainly and specifically: how much, how often." },

    { id: "a10", cat: "assess",
      text: "A client says, “I know my drinking is causing problems with my wife, but I'm not sure I'm ready to give it up.”",
      ask: "Which stage of change is the client in?",
      opts: [
        ["Precontemplation", "Precontemplation means not seeing a problem. He clearly sees one."],
        ["Contemplation", "He sees the problem and feels torn about changing. Explore that ambivalence; motivational interviewing fits well here."],
        ["Preparation", "Preparation means planning to act soon, often with small steps already taken."],
        ["Action", "He hasn't started changing yet."]
      ],
      c: 1,
      tip: "“I know, but…” = contemplation." },

    { id: "a11", cat: "assess",
      text: "In a first couples session, the wife seems tense and glances at her husband before answering each question. The social worker suspects intimate partner violence.",
      ask: "What should the social worker do NEXT?",
      opts: [
        ["Ask the wife, in front of her husband, whether she feels safe at home.", "Asking in front of a possible abuser could put her in danger."],
        ["Meet with each partner separately to screen for violence.", "Screening for partner violence must happen privately. If abuse is present, couples counseling usually isn't appropriate."],
        ["Continue couples counseling with a focus on communication skills.", "Couples work can increase danger when there's ongoing abuse."],
        ["Report the husband to the police for suspected abuse.", "Nothing is confirmed, and adult partner violence usually isn't a mandated report. Assess first and respect the client's choices."]
      ],
      c: 1,
      tip: "Suspect partner violence = screen each partner alone." },

    { id: "a12", cat: "assess",
      text: "A client has thoughts of suicide but no plan or intent. The social worker and client are making a safety plan together.",
      ask: "What is MOST important to include in the plan?",
      opts: [
        ["A signed promise from the client that she won't harm herself before the next session.", "No-suicide contracts haven't been shown to prevent suicide and can give false reassurance."],
        ["Her warning signs, coping steps, and people and crisis lines to contact.", "Good safety plans are personal and concrete: warning signs, coping strategies, supports, crisis contacts like 988, and limiting access to means."],
        ["A schedule of weekly sessions for the next three months.", "Ongoing sessions help, but they aren't a safety plan."],
        ["A list of reasons the social worker believes life is worth living.", "Reasons for living should come from the client, not the social worker."]
      ],
      c: 1,
      tip: "Safety plan beats no-harm contract. Make it concrete and client-driven." },

    { id: "a13", cat: "assess",
      text: "A social worker in a primary care clinic wants a quick screening tool for problem drinking.",
      ask: "Which tool is BEST suited?",
      opts: [
        ["Mini-Mental State Exam (MMSE)", "Screens thinking and memory, not alcohol use."],
        ["CAGE questionnaire", "Four quick questions: Cut down, Annoyed, Guilty, Eye-opener. The AUDIT is another common choice."],
        ["PHQ-9", "Screens for depression."],
        ["Beck Anxiety Inventory", "Measures anxiety symptoms."]
      ],
      c: 1,
      tip: "CAGE = alcohol. PHQ-9 = depression. MMSE = thinking and memory." },

    { id: "a14", cat: "assess",
      text: "A social worker wants a visual picture of a family's ties to outside systems like school, work, church, and health care, and whether each tie is strong or stressful.",
      ask: "Which tool should the social worker use?",
      opts: [
        ["Genogram", "A genogram maps family members and relationships across generations."],
        ["Ecomap", "An ecomap shows the family in its environment and the strength or stress of each connection."],
        ["Sociogram", "A sociogram maps relationships among members of a group."],
        ["Timeline", "A timeline shows events over time."]
      ],
      c: 1,
      tip: "Genogram = generations. Ecomap = environment." },

    { id: "a15", cat: "assess",
      text: "A 16-year-old who was court-ordered to counseling sits with his arms crossed and says, “I don't need to be here.”",
      ask: "What is the BEST response?",
      opts: [
        ["“The judge says you do, so let's just make the best of it.”", "Leaning on authority invites more resistance."],
        ["“Sounds like this wasn't your idea. What's your side of it?”", "Acknowledging that he didn't choose this and asking for his view builds engagement."],
        ["“If you won't take part, I'll have to report that to the court.”", "Threats damage trust. Explain the limits of confidentiality without threatening."],
        ["“Most teens feel that way at first, but they end up liking it.”", "This brushes off his feelings."]
      ],
      c: 1,
      tip: "Mandated or resistant client = acknowledge it, roll with it, ask their view." },

    { id: "a16", cat: "assess",
      text: "A teacher refers an 8-year-old for being “hyperactive” in class. His parents say he's fine at home.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Recommend an evaluation for ADHD medication.", "Too early. No assessment has been done."],
        ["Start a reward chart with the teacher to improve his behavior in the classroom.", "Intervening before assessing skips a step."],
        ["Gather information from home, school, and the child's doctor.", "A full assessment uses several sources and settings and rules out medical issues like hearing, vision, or sleep problems. Different reports from home and school are useful information."],
        ["Tell the parents the teacher may be overreacting.", "Taking sides dismisses useful information."]
      ],
      c: 2,
      tip: "Assess before you intervene, and use more than one source." },

    { id: "a17", cat: "assess",
      text: "During an intake, a client becomes visibly upset when asked about her childhood and says, “I really don't want to talk about that.”",
      ask: "What is the BEST response?",
      opts: [
        ["Gently explain that the full history is needed to help her.", "Pressuring a trauma survivor to disclose can retraumatize her."],
        ["Respect her choice and let her know she can share when she's ready.", "Trauma-informed care puts safety, choice, and control first. The history can come later, at her pace."],
        ["Switch to a written trauma checklist so it's easier for her.", "A checklist still pushes the topic she just declined."],
        ["End the intake and reschedule for when she feels calmer.", "Ending early can feel like a punishment for setting a limit."]
      ],
      c: 1,
      tip: "Trauma-informed = safety, choice, control. Let the client set the pace." },

    { id: "a18", cat: "assess",
      text: "After three months, a client has made no progress on the goals she and the social worker set together.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Refer her to a provider who uses a different approach.", "Maybe later. First figure out what's going on."],
        ["Increase sessions from weekly to twice a week.", "More of the same won't help if the plan is off."],
        ["Talk with the client about her progress and what's getting in the way.", "Review the plan together. Goals may need adjusting or barriers may need addressing. Evaluation is ongoing and shared."],
        ["Bring up ending services, since the treatment clearly isn't working for her.", "Ending is premature before you reassess."]
      ],
      c: 2,
      tip: "Stuck? Reassess with the client before changing course." },

    { id: "a19", cat: "assess",
      text: "A social worker is assessing a client's risk of suicide.",
      ask: "Which factor is the STRONGEST single predictor of suicide?",
      opts: [
        ["A previous suicide attempt", "A past attempt is the strongest single predictor of future suicidal behavior."],
        ["A diagnosis of depression", "A major risk factor, but a past attempt predicts risk even more strongly."],
        ["A recent job loss", "A real stressor and risk factor, but not the strongest predictor."],
        ["Living alone", "Isolation adds risk, but it isn't the strongest predictor."]
      ],
      c: 0,
      tip: "Strongest single predictor of suicide = a previous attempt." },

    { id: "a20", cat: "assess",
      text: "After a thorough assessment, an adult client has frequent panic attacks with no medical cause. She wants a treatment with strong research support.",
      ask: "Which approach should the social worker recommend?",
      opts: [
        ["Cognitive behavioral therapy with exposure", "CBT, including gradual exposure to feared sensations, has the strongest research support for panic disorder."],
        ["Long-term psychodynamic therapy focused on early conflicts", "Less research support for panic disorder than CBT."],
        ["Narrative therapy", "Not an evidence-based first choice for panic disorder."],
        ["Nondirective play therapy", "Designed for young children, not adult panic."]
      ],
      c: 0,
      tip: "Choose the intervention that fits both the assessment and the evidence." },

    // ---------------- Intervention & Practice ----------------
    { id: "i1", cat: "interv",
      text: "A woman arrives at the agency in tears. Her apartment burned down last night, and she and her two children slept in their car.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Help her explore her feelings about losing her home and all her belongings.", "Feelings matter, but in a crisis, safety and basic needs come first."],
        ["Assess the family's immediate safety and needs, like shelter tonight.", "Crisis intervention starts with safety and urgent needs: shelter, food, medical care."],
        ["Help her call her insurance company to start a claim.", "Important, but not the most urgent need."],
        ["Refer her to a support group for disaster survivors.", "Longer-term support comes after immediate needs are met."]
      ],
      c: 1,
      tip: "Crisis = safety and basic needs first." },

    { id: "i2", cat: "interv",
      text: "A client says, “My doctor keeps telling me to quit smoking, but it's the only thing that helps me relax.”",
      ask: "Which response BEST reflects motivational interviewing?",
      opts: [
        ["“You really should listen to your doctor, since smoking is seriously harming your health.”", "That's the “righting reflex.” Pushing usually strengthens resistance."],
        ["“Have you tried nicotine patches or gum?”", "This jumps to solutions before exploring the client's mixed feelings."],
        ["“Smoking helps you relax, and you're also hearing worries about your health.”", "A double-sided reflection captures both sides of the ambivalence so the client can weigh them."],
        ["“Why haven't you been able to quit so far?”", "“Why” questions can sound judgmental and make people defensive."]
      ],
      c: 2,
      tip: "Motivational interviewing = reflect both sides, don't push." },

    { id: "i3", cat: "interv",
      text: "A social worker asks a couple, “Think of a day this week when you didn't argue. What was different that day?”",
      ask: "This is an example of which technique?",
      opts: [
        ["Reframing", "Reframing gives a behavior a new meaning, as in strategic family therapy."],
        ["An exception question", "Solution-focused therapy looks for times the problem didn't happen and builds on them."],
        ["Cognitive restructuring", "A CBT technique for challenging distorted thoughts."],
        ["Externalizing the problem", "A narrative therapy technique that separates the person from the problem."]
      ],
      c: 1,
      tip: "Solution-focused = exception questions, scaling questions, the miracle question." },

    { id: "i4", cat: "interv",
      text: "A client with depression says, “I'm a complete failure. I can't do anything right.”",
      ask: "Using cognitive behavioral therapy, what would the social worker MOST likely do?",
      opts: [
        ["Explore the early childhood experiences that may have shaped this belief.", "That's a psychodynamic focus."],
        ["Reassure the client that she isn't a failure.", "Reassurance doesn't teach her to examine her own thoughts."],
        ["Teach progressive muscle relaxation for stress.", "Useful for anxiety, but it doesn't address the thought."],
        ["Help the client examine the evidence for and against this belief.", "Cognitive restructuring: spot the distortion (all-or-nothing thinking) and test it against the evidence."]
      ],
      c: 3,
      tip: "CBT: thoughts drive feelings and behavior. Challenge the thought." },

    { id: "i5", cat: "interv",
      text: "In the third meeting of a new support group, members start challenging the leader and arguing over the group's rules.",
      ask: "What should the group leader do?",
      opts: [
        ["Restate the group rules firmly and move the discussion back to the topic.", "Shutting down conflict keeps the group from working through it."],
        ["Acknowledge the conflict as normal and help members talk it through.", "This is the storming stage, also called power and control. Working through conflict helps the group build norms and trust."],
        ["Ask the most outspoken member to leave the group.", "Removing someone over normal group conflict is punitive."],
        ["Split the group into smaller groups to lower the tension.", "This avoids the conflict instead of using it."]
      ],
      c: 1,
      tip: "Forming, storming, norming, performing, adjourning. Conflict while storming is normal." },

    { id: "i6", cat: "interv",
      text: "As termination gets closer, a client who has made good progress starts missing sessions. She says her old symptoms are “coming back.”",
      ask: "What should the social worker do?",
      opts: [
        ["Extend services until the symptoms go away.", "This can build dependence. Explore first."],
        ["Explore the client's feelings about ending services.", "Setbacks and missed sessions are common reactions to termination. Talking about the ending is part of the work."],
        ["Refer the client for a medication evaluation.", "The timing points to feelings about ending, not a new medical need."],
        ["Go ahead with termination as planned without discussing it.", "Ignoring her reaction skips important termination work."]
      ],
      c: 1,
      tip: "Old symptoms right before the end? Explore feelings about ending." },

    { id: "i7", cat: "interv",
      text: "In family therapy, the social worker notices that a mother and her 14-year-old son make the family's decisions together while the father is left out.",
      ask: "Using structural family therapy, what would the social worker MOST likely do?",
      opts: [
        ["Explore each parent's family of origin.", "That's closer to Bowen's intergenerational approach."],
        ["Strengthen the boundary around the parents as a team.", "Structural therapy (Minuchin) reshapes boundaries and hierarchy. Here that means strengthening the parental subsystem and loosening the mother-son coalition."],
        ["Give the family a paradoxical task to do at home.", "Paradoxical directives come from strategic therapy."],
        ["Help the son rewrite the story of his role in the family.", "That's narrative therapy."]
      ],
      c: 1,
      tip: "Structural = boundaries, subsystems, hierarchy (Minuchin)." },

    { id: "i8", cat: "interv",
      text: "A client who injects heroin says he isn't ready to stop using.",
      ask: "Which response reflects a harm reduction approach?",
      opts: [
        ["Require abstinence before he can receive other services.", "That's the opposite of harm reduction."],
        ["Tell him services will be available once he's ready to quit.", "Harm reduction meets people where they are now."],
        ["Give him information on syringe services and naloxone.", "Harm reduction lowers the risks of use, like overdose and infection, without requiring abstinence."],
        ["Confront his denial about how serious his addiction is.", "Confrontation tends to increase resistance."]
      ],
      c: 2,
      tip: "Harm reduction = lower the risk now. Abstinence isn't required." },

    { id: "i9", cat: "interv",
      text: "A client's disability benefits were denied. She brings the denial letter to her social worker and says she doesn't understand it.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Call the benefits office and file the appeal on her behalf so it's done quickly.", "Doing it for her skips her understanding and her choice."],
        ["Refer her to a legal aid attorney to handle the appeal.", "Maybe later. First help her understand what the letter says."],
        ["Go over the letter together and explain her options, including an appeal.", "Empowerment: help the client understand and decide, then support or advocate as needed."],
        ["Encourage her to reapply in six months.", "She could miss her appeal deadline."]
      ],
      c: 2,
      tip: "Empower first: help the client understand and choose." },

    { id: "i10", cat: "interv",
      text: "The parents of a 19-year-old recently diagnosed with schizophrenia blame themselves and ask what they did wrong.",
      ask: "What is the MOST helpful intervention?",
      opts: [
        ["Explore the parenting decisions they think may have caused it.", "This can deepen guilt that isn't deserved."],
        ["Teach them about schizophrenia, including that parenting doesn't cause it.", "Family psychoeducation eases guilt and stress and is linked to fewer relapses."],
        ["Refer each parent to individual therapy to work through their guilt and grief.", "It could help later, but right now they need accurate information."],
        ["Suggest they save their questions for the psychiatrist's next visit.", "Social workers can and should provide psychoeducation."]
      ],
      c: 1,
      tip: "Families facing serious mental illness = psychoeducation." },

    { id: "i11", cat: "interv",
      text: "A client arrives for her session slurring her words and smelling strongly of alcohol. She drove herself to the appointment.",
      ask: "What should the social worker do?",
      opts: [
        ["Hold the session as planned, and use it to confront her about her drinking.", "Real work can't happen while she's intoxicated."],
        ["Reschedule, and make sure she gets home safely without driving.", "Don't hold a session with an intoxicated client, but do handle the immediate risk of her driving."],
        ["Call the police to report that she is driving drunk.", "Arrange a safe ride first. Police come in only if she insists on driving while impaired."],
        ["End services, since she broke the agency's rules.", "Punitive, and it abandons her when she needs help."]
      ],
      c: 1,
      tip: "Intoxicated client: no session, yes safety." },

    { id: "i12", cat: "interv",
      text: "A father nags his son until the son cleans his room. When the son cleans, the nagging stops. Over time, the son cleans his room more often.",
      ask: "What is this an example of?",
      opts: [
        ["Positive reinforcement", "Positive reinforcement adds something pleasant."],
        ["Negative reinforcement", "Taking away something unpleasant (the nagging) increases a behavior (cleaning). Reinforcement always increases behavior."],
        ["Punishment", "Punishment decreases a behavior. Here the behavior increases."],
        ["Extinction", "Extinction removes reinforcement so a behavior fades."]
      ],
      c: 1,
      tip: "Reinforcement increases behavior, punishment decreases it. Positive adds, negative removes." },

    { id: "i13", cat: "interv",
      text: "A social worker wants to find out whether a new intervention reduces a child's tantrums at home.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Start the intervention and ask the parents how it's going.", "Without a baseline, you can't tell whether anything changed."],
        ["Measure how often tantrums happen before the intervention starts.", "Single-subject (A-B) designs start with a baseline (A), then measure during the intervention (B)."],
        ["Compare the child with other children in the same program.", "That's a group design, not tracking this child's change."],
        ["Ask the child's teacher whether she has noticed improvement.", "The tantrums happen at home, and you still need a baseline first."]
      ],
      c: 1,
      tip: "Evaluating practice: baseline first (A), then intervention (B)." },

    { id: "i14", cat: "interv",
      text: "A client has a long pattern of intense emotional swings, unstable relationships, and frequent self-harm.",
      ask: "Which intervention has the STRONGEST research support for these concerns?",
      opts: [
        ["Dialectical behavior therapy (DBT)", "DBT was built for chronic self-harm and emotional dysregulation. It teaches mindfulness, distress tolerance, emotion regulation, and interpersonal skills."],
        ["Solution-focused brief therapy", "Helpful for many issues, but not the evidence-based choice here."],
        ["Classical psychoanalysis", "Not a first-line, evidence-based approach for chronic self-harm."],
        ["Task-centered practice", "Good for concrete problems, not emotional dysregulation."]
      ],
      c: 0,
      tip: "Self-harm plus emotional dysregulation = DBT." },

    { id: "i15", cat: "interv",
      text: "After talking about her father's recent death, a client goes quiet and looks down for several moments.",
      ask: "What is the BEST response?",
      opts: [
        ["Allow the silence and give her time.", "Silence often means the client is processing. Waiting respectfully gives her space."],
        ["Change the subject to something less upsetting.", "Moving on tells her these feelings are too much to talk about."],
        ["Ask whether she has made the funeral arrangements.", "A practical question that interrupts her emotional processing."],
        ["Reassure her that the pain will fade with time.", "Reassurance can minimize her grief."]
      ],
      c: 0,
      tip: "Silence isn't a problem to fix. Often it's part of the work." },

    { id: "i16", cat: "interv",
      text: "Three weeks after her husband died, a widow tells the social worker she sometimes hears his voice calling her name. She has no history of mental illness.",
      ask: "What should the social worker do?",
      opts: [
        ["Refer her for an urgent psychiatric evaluation to rule out a psychotic disorder.", "Briefly hearing or sensing a loved one who died is common in normal grief."],
        ["Explain that this is a common grief experience and explore her feelings.", "Normalizing it eases her fear while you keep assessing how she's coping."],
        ["Tell her it will stop soon and focus on practical matters.", "This brushes her experience aside."],
        ["Encourage her to stay busy so she thinks about him less.", "Avoidance can complicate grieving."]
      ],
      c: 1,
      tip: "Hearing or sensing a loved one after a death is often normal grief, not psychosis." },

    { id: "i17", cat: "interv",
      text: "A client says, “You're too young to understand what I'm going through.”",
      ask: "What is the BEST response?",
      opts: [
        ["“I have a master's degree and years of experience.”", "Defending yourself puts the focus on the worker."],
        ["“Age really doesn't matter in this kind of work.”", "This dismisses the client's concern."],
        ["“You're wondering whether I can really understand you.”", "Reflecting the concern invites the client to talk about it openly and builds trust."],
        ["“Would you rather work with an older social worker?”", "Premature. Explore the concern first."]
      ],
      c: 2,
      tip: "Client challenges you? Don't defend. Reflect and explore." },

    { id: "i18", cat: "interv",
      text: "A client says she stopped taking her antidepressant two weeks ago because of side effects. She hasn't told her doctor.",
      ask: "What should the social worker do?",
      opts: [
        ["Encourage her to talk with her prescriber about the side effects.", "Medication decisions belong with the prescriber. The social worker supports the client in speaking up, and can coordinate care with her consent."],
        ["Tell her to restart the medication right away.", "Social workers don't give medication instructions."],
        ["Support her decision, since it's her right to refuse medication.", "It is her right, but stopping some medications suddenly can be risky. Her prescriber should know."],
        ["Call her doctor to report that she stopped the medication.", "Not without her consent. First encourage her to tell the doctor herself."]
      ],
      c: 0,
      tip: "Medication questions go to the prescriber. Support, don't prescribe." },

    { id: "i19", cat: "interv",
      text: "A neighborhood has no grocery store. A social worker helps residents come together, choose their own leaders and goals, and build skills to tackle the problem themselves.",
      ask: "Which model of community practice is this?",
      opts: [
        ["Social planning", "Expert-driven, data-based problem solving."],
        ["Social action", "Confronting power structures to shift power or resources."],
        ["Locality development", "Broad participation, self-help, and building local leadership and capacity (Rothman)."],
        ["Program evaluation", "Judging whether a program works."]
      ],
      c: 2,
      tip: "Rothman: locality development = self-help, social planning = experts, social action = power." },

    { id: "i20", cat: "interv",
      text: "A client says, “My boss yelled at me in front of the whole team today.”",
      ask: "Which response is a reflection of feeling?",
      opts: [
        ["“What did you say back to him?”", "A question about events, not feelings."],
        ["“That sounds humiliating, and maybe infuriating too.”", "Reflection of feeling names the emotion under the words."],
        ["“Your boss criticized you in front of your coworkers.”", "That's a paraphrase of the content, not the feeling."],
        ["“Maybe you should talk to HR about it.”", "That's advice."]
      ],
      c: 1,
      tip: "Paraphrase = content. Reflection of feeling = emotion." },

    // ---------------- Human Development & Diversity ----------------
    { id: "h1", cat: "human",
      text: "A 15-year-old keeps changing her style, friend groups, and career plans every few months. Her parents worry that something is wrong.",
      ask: "According to Erikson, which stage BEST explains this behavior?",
      opts: [
        ["Identity vs. role confusion", "Teens try on roles, values, and looks as they work out who they are. Some trying-on is healthy and expected."],
        ["Intimacy vs. isolation", "That's young adulthood: forming close, committed relationships."],
        ["Industry vs. inferiority", "That's school age, about 6 to 12: building skills and competence."],
        ["Autonomy vs. shame and doubt", "That's toddlerhood: learning to do things for oneself."]
      ],
      c: 0,
      tip: "Erikson in the teen years = identity vs. role confusion. Experimenting is normal." },

    { id: "h2", cat: "human",
      text: "A 79-year-old man in hospice spends much of his time looking back on his life. He says he's mostly at peace, though he regrets losing touch with his brother.",
      ask: "Which of Erikson's stages is he working through?",
      opts: [
        ["Generativity vs. stagnation", "That's middle adulthood: contributing to the next generation."],
        ["Integrity vs. despair", "Late adulthood: looking back and finding meaning (integrity) or regret (despair). A life review fits here."],
        ["Intimacy vs. isolation", "That's young adulthood."],
        ["Trust vs. mistrust", "That's infancy."]
      ],
      c: 1,
      tip: "Life review in old age = integrity vs. despair." },

    { id: "h3", cat: "human",
      text: "A mother says her 10-month-old now cries and searches when she hides his toy under a blanket. A few months ago, he lost interest as soon as it was out of sight.",
      ask: "Which developmental milestone does this show?",
      opts: [
        ["Object permanence", "In Piaget's sensorimotor stage, babies learn that things still exist when they can't see them, usually from around 8 months."],
        ["Conservation", "Conservation (amount stays the same when shape changes) comes in the concrete operational stage, around ages 7 to 11."],
        ["Egocentrism", "Egocentrism is a preschooler's difficulty seeing another person's point of view."],
        ["Separation anxiety", "Separation anxiety also shows up around this age, but it's about the caregiver leaving, not hidden toys."]
      ],
      c: 0,
      tip: "Piaget: sensorimotor (object permanence), preoperational (egocentrism), concrete operational (conservation), formal operational (abstract thinking)." },

    { id: "h4", cat: "human",
      text: "A 5-year-old insists that a tall, thin glass holds more juice than a short, wide glass, even after watching the same amount poured into each.",
      ask: "In Piaget's terms, what has this child NOT yet developed?",
      opts: [
        ["Object permanence", "That develops in infancy. This child already has it."],
        ["Conservation", "Knowing that quantity stays the same when shape changes arrives in the concrete operational stage, around age 7. A 5-year-old is still preoperational."],
        ["Abstract reasoning", "That's formal operational thinking in adolescence, and it isn't what this task tests."],
        ["Theory of mind", "Understanding other people's beliefs is usually in place by age 4 or 5, and it isn't what this task tests."]
      ],
      c: 1,
      tip: "Tall glass vs. wide glass = conservation (concrete operational, about age 7)." },

    { id: "h5", cat: "human",
      text: "In a structured observation, a toddler barely reacts when his mother leaves the room. When she comes back, he ignores her and keeps playing with his toys.",
      ask: "This pattern BEST fits which attachment style?",
      opts: [
        ["Secure", "A securely attached child is usually upset when the parent leaves and is comforted when the parent returns."],
        ["Anxious-ambivalent", "These children are very upset at separation and both seek and resist comfort at the reunion."],
        ["Avoidant", "Little distress at separation and avoiding the parent at reunion is the classic avoidant pattern in Ainsworth's Strange Situation."],
        ["Disorganized", "Disorganized attachment shows confused or contradictory behavior, like freezing, and is often linked to frightening caregiving."]
      ],
      c: 2,
      tip: "Attachment: secure, avoidant, anxious-ambivalent, disorganized. Avoidant = “I don't need you” at the reunion." },

    { id: "h6", cat: "human",
      text: "After being criticized by his boss, a man comes home and yells at his kids for leaving their shoes by the door.",
      ask: "Which defense mechanism is he using?",
      opts: [
        ["Projection", "Projection puts your own unacceptable feelings onto someone else, like accusing others of being angry."],
        ["Displacement", "He moves his anger from a risky target (his boss) to a safer one (his kids)."],
        ["Sublimation", "Sublimation channels an urge into something healthy, like going for a hard run."],
        ["Reaction formation", "Reaction formation is acting the opposite of what you feel, like being extra sweet to someone you resent."]
      ],
      c: 1,
      tip: "Displacement = kicking the dog. Projection = “You're the angry one!”" },

    { id: "h7", cat: "human",
      text: "A woman who deeply resents her mother-in-law goes out of her way to be extremely sweet and complimentary to her, far more than to anyone else.",
      ask: "Which defense mechanism BEST describes this?",
      opts: [
        ["Rationalization", "Rationalization is making up acceptable reasons for behavior, like “I failed because the test was unfair.”"],
        ["Reaction formation", "She turns an unacceptable feeling (resentment) into its exaggerated opposite (sweetness)."],
        ["Denial", "Denial is refusing to accept a reality, like insisting a serious diagnosis is wrong."],
        ["Intellectualization", "Intellectualization is retreating into facts and logic to avoid feelings."]
      ],
      c: 1,
      tip: "Reaction formation = the over-the-top opposite of what you really feel." },

    { id: "h8", cat: "human",
      text: "A man recently diagnosed with terminal cancer tells the social worker, “If I can just live to see my daughter graduate in June, I'll accept whatever comes after.”",
      ask: "Which stage of grief is he MOST likely in?",
      opts: [
        ["Denial", "He isn't rejecting the diagnosis. He's acknowledging it."],
        ["Anger", "There's no blame or rage in what he says."],
        ["Bargaining", "“If I can just…” is a classic bargain: trying to negotiate for more time or a different outcome."],
        ["Acceptance", "He isn't at peace with it yet. He's trying to make a deal first."]
      ],
      c: 2,
      tip: "Kübler-Ross: denial, anger, bargaining, depression, acceptance. People don't always move through them in order." },

    { id: "h9", cat: "human",
      text: "A father was evicted yesterday and is sleeping in his car with his two children. He tells the social worker he feels like a complete failure.",
      ask: "Using Maslow's hierarchy, what should the social worker focus on FIRST?",
      opts: [
        ["His feelings of failure and low self-esteem", "Esteem matters, but Maslow puts it above basic survival and safety needs."],
        ["Finding safe shelter for the family tonight", "Physiological and safety needs, like shelter, come first in Maslow's hierarchy."],
        ["His long-term career and education goals", "Growth goals rest on a stable base. Shelter comes first."],
        ["Rebuilding his support network", "Belonging comes after physiological and safety needs."]
      ],
      c: 1,
      tip: "Maslow: body, safety, belonging, esteem, self-actualization. Shelter first." },

    { id: "h10", cat: "human",
      text: "A 9-year-old says it's wrong to cheat on a test “because you'll get in trouble if the teacher catches you.”",
      ask: "Which level of Kohlberg's moral development does this reflect?",
      opts: [
        ["Preconventional", "Right and wrong are judged by punishment and reward, which is typical of young children."],
        ["Conventional", "Conventional reasoning is about following rules and meeting others' expectations to be seen as good."],
        ["Postconventional", "Postconventional reasoning rests on personal principles and universal ethics, beyond rules."],
        ["Formal operational", "That's Piaget's stage of abstract thinking, not a Kohlberg level."]
      ],
      c: 0,
      tip: "Kohlberg: preconventional (avoid punishment), conventional (follow rules, be good), postconventional (principles)." },

    { id: "h11", cat: "human",
      text: "After the father in a family stops drinking, the family seems to struggle more. Without realizing it, the mother and kids act in ways that make a relapse more likely.",
      ask: "Which systems theory concept BEST explains this?",
      opts: [
        ["Equifinality", "Equifinality means different starting points can lead to the same outcome."],
        ["Homeostasis", "Systems tend to pull back toward their familiar balance, even an unhealthy one, when one part changes."],
        ["Differentiation", "Differentiation (Bowen) is about separating your own thoughts and feelings from the family's."],
        ["Entropy", "Entropy is a closed system's slide toward disorder and decline."]
      ],
      c: 1,
      tip: "Homeostasis: families pull back toward the old balance, even when it hurts." },

    { id: "h12", cat: "human",
      text: "A child's anxiety rises after her mother's employer moves the mother to night shifts. The child has never been to her mother's workplace.",
      ask: "In Bronfenbrenner's ecological model, which of the child's systems includes her mother's workplace?",
      opts: [
        ["Microsystem", "The microsystem is the settings the child is directly in, like home and school."],
        ["Mesosystem", "The mesosystem is the links between the child's settings, like parents and teachers talking."],
        ["Exosystem", "The exosystem is settings the child isn't part of that still affect her, like a parent's job."],
        ["Macrosystem", "The macrosystem is the broad culture, values, laws, and economy."]
      ],
      c: 2,
      tip: "Bronfenbrenner: micro (direct), meso (links), exo (affects you from outside), macro (culture), chrono (time)." },

    { id: "h13", cat: "human",
      text: "An immigrant family keeps their native language and traditions at home while also taking an active part in their new country's schools, work, and community life.",
      ask: "Which acculturation strategy does this describe?",
      opts: [
        ["Assimilation", "Assimilation means giving up the original culture to adopt the new one."],
        ["Integration", "Integration, sometimes called biculturalism, keeps the heritage culture while taking part in the new one. It's generally linked to the best adjustment."],
        ["Separation", "Separation keeps the original culture while avoiding the new one."],
        ["Marginalization", "Marginalization is losing connection with both cultures."]
      ],
      c: 1,
      tip: "Berry: integration (both), assimilation (new only), separation (old only), marginalization (neither)." },

    { id: "h14", cat: "human",
      text: "A Korean American client born in Ohio tells her social worker that coworkers often compliment her “excellent English” and ask where she's “really” from.",
      ask: "What BEST describes these comments?",
      opts: [
        ["Microaggressions", "Everyday comments, often unintended, that signal someone doesn't belong. Here, a U.S.-born woman is treated as a foreigner."],
        ["Institutional racism", "Institutional racism lives in policies and systems, not individual comments."],
        ["Cultural appropriation", "That's adopting parts of another culture, often without respect or credit."],
        ["Acculturative stress", "That's stress from adapting to a new culture. She was born here."]
      ],
      c: 0,
      tip: "Microaggressions: small, often unintended slights that add up. Validate the client's experience." },

    { id: "h15", cat: "human",
      text: "A social worker realizes that a client's experiences as a Black, disabled woman can't be understood by looking at race, disability, or gender one at a time.",
      ask: "Which concept does this reflect?",
      opts: [
        ["Intersectionality", "Kimberlé Crenshaw's term for how overlapping identities create unique experiences of privilege and oppression."],
        ["Cultural relativism", "Cultural relativism means judging a culture's practices by its own standards."],
        ["Assimilation", "Assimilation is adopting the dominant culture's ways."],
        ["Color-blindness", "Ignoring race erases important parts of the client's experience."]
      ],
      c: 0,
      tip: "Intersectionality: identities overlap and combine. They don't just add up." },

    { id: "h16", cat: "human",
      text: "A 17-year-old client who was assigned female at birth tells the social worker he is a boy and that he's attracted to boys. He asks whether that means he's gay or transgender.",
      ask: "What is the MOST accurate response?",
      opts: [
        ["“Those are two separate things. You can be transgender and gay.”", "Gender identity is who you are. Sexual orientation is who you're attracted to. They're independent of each other."],
        ["“Being attracted to boys might mean you're confused about your gender.”", "Orientation doesn't determine gender identity, and this treats his identity as confusion."],
        ["“Lots of teens go through phases like this and outgrow them.”", "Dismissing a teen's stated identity harms trust and well-being. Affirm and explore."],
        ["“You won't know your orientation until after you transition.”", "Orientation and transition are unrelated, and he has already said who he's attracted to."]
      ],
      c: 0,
      tip: "Gender identity = who you are. Sexual orientation = who you're attracted to. Separate things." },

    { id: "h17", cat: "human",
      text: "A 72-year-old woman says she sometimes forgets a name and remembers it later, or walks into a room and forgets why. She handles her money, cooking, and appointments without trouble.",
      ask: "How is this BEST understood?",
      opts: [
        ["Early signs of Alzheimer's disease", "Dementia affects daily functioning, and she's managing everything on her own."],
        ["Typical age-related changes in memory", "Occasional lapses that come back to her, with daily life intact, are part of normal aging."],
        ["Delirium needing emergency care", "Delirium is sudden confusion and inattention, not occasional forgetfulness."],
        ["Memory problems caused by depression", "Depression can affect memory, but nothing here suggests low mood."]
      ],
      c: 1,
      tip: "Normal aging: forgets, then remembers, and life still works. Dementia: daily life starts to slip." },

    { id: "h18", cat: "human",
      text: "A social worker is reading research on adverse childhood experiences (ACEs), such as abuse, neglect, and household dysfunction.",
      ask: "What does the research MOST consistently show?",
      opts: [
        ["Most children who face adversity show no lasting effects once they reach adulthood.", "Many children are resilient, but on average ACEs raise the risk of later problems."],
        ["The more ACEs a person has, the higher their risk of adult health problems.", "The original CDC-Kaiser study found a dose-response link: more ACEs, higher risk of conditions like heart disease, depression, and substance use."],
        ["ACEs affect mental health but not physical health.", "ACEs are linked to physical conditions too, like heart disease and diabetes."],
        ["Only physical abuse has a measurable long-term impact.", "Neglect, household dysfunction, and other ACEs raise risk too."]
      ],
      c: 1,
      tip: "ACEs work like a dose: more adversity, more lifelong risk. Supportive relationships can buffer it." },

    { id: "h19", cat: "human",
      text: "A 6-year-old starts hitting his little sister after watching his older cousin hit other kids and get his way.",
      ask: "Which theory BEST explains how this behavior was learned?",
      opts: [
        ["Social learning theory", "Bandura: people learn by watching others, especially when they see the behavior rewarded."],
        ["Classical conditioning", "Classical conditioning pairs a neutral stimulus with an automatic response, like Pavlov's dogs."],
        ["Psychosexual theory", "Freud's stages focus on drives and early conflicts, not learning by watching."],
        ["Cognitive dissonance theory", "That's the discomfort of holding conflicting beliefs or acting against them."]
      ],
      c: 0,
      tip: "Learning by watching, and seeing it pay off = Bandura's social learning theory." },

    { id: "h20", cat: "human",
      text: "Parents of a 2-year-old are worried because she says “No!” to almost everything and has tantrums when she can't do things by herself.",
      ask: "What is the BEST way to understand this behavior?",
      opts: [
        ["A normal push for independence at this age", "Erikson's autonomy vs. shame and doubt: toddlers assert themselves, so “No!” and tantrums are expected."],
        ["Early oppositional defiant disorder", "Saying no is normal at 2. A diagnosis needs a lasting pattern beyond what's typical for the child's age."],
        ["A reaction to inconsistent parenting", "Nothing here points to a parenting problem."],
        ["A sign of insecure attachment", "Asserting independence doesn't signal insecure attachment. Secure toddlers explore and push back."]
      ],
      c: 0,
      tip: "Toddler “No!” = autonomy vs. shame and doubt. Normal development, not a disorder." }
  ] /* Q-END */;
